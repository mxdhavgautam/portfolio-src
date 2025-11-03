import 'package:flutter/material.dart';
import 'package:flutter_native_splash/flutter_native_splash.dart';

import 'theme/responsive_screen_provider.dart';
import 'theme/app_theme.dart';
import 'widgets/nav_bar.dart';
import 'desktop/ds_1_header.dart';
import 'desktop/ds_2_about_me.dart';
import 'desktop/ds_3_education.dart';
import 'desktop/ds_4_experience.dart';
import 'desktop/ds_5_extracurriculars.dart';
import 'desktop/ds_6_projects.dart';
import 'desktop/ds_7_contact.dart';
import 'desktop/ds_8_footer.dart';
import 'mobile/ms_1_header.dart';
import 'mobile/ms_2_about_me.dart';
import 'mobile/ms_3_education.dart';
import 'mobile/ms_4_experience.dart';
import 'mobile/ms_5_extracurriculars.dart';
import 'mobile/ms_6_projects.dart';
import 'mobile/ms_7_contact.dart';
import 'mobile/ms_8_footer.dart';
import 'package:seo/seo.dart';
import 'package:flutter_web_plugins/url_strategy.dart';

void main() {
  usePathUrlStrategy();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    // Defer initial heavy work until after splash is shown
    WidgetsBinding.instance.addPostFrameCallback((_) async {
      // Allow the splash to be visible for a tick while we warm caches
      await Future<void>.delayed(const Duration(milliseconds: 50));
      final List<String> moreToCache = <String>[
        'assets/images/hcl.webp',
        'assets/images/github.webp',
      ];
      for (final String assetPath in moreToCache) {
        precacheImage(AssetImage(assetPath), context);
      }
    });
    return SeoController(
      enabled: true,
      tree: WidgetTree(context: context),
      child: MaterialApp(
        title: 'Madhav Gautam',
        theme: AppThemeData.lightTheme,
        darkTheme: AppThemeData.darkTheme,
        themeMode: ThemeMode.system,
        home: const HomePage(),
      ),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  bool _showBackToTopButton = false;
  late ScrollController _scrollController;

  @override
  void initState() {
    _scrollController = ScrollController()
      ..addListener(
        () {
          final bool shouldShow = _scrollController.offset >= 300;
          if (shouldShow != _showBackToTopButton) {
            setState(() {
              _showBackToTopButton = shouldShow;
            });
          }
        },
      );

    super.initState();

    // Precache key images to reduce first-scroll jank, especially near extracurriculars
    WidgetsBinding.instance.addPostFrameCallback((_) {
      final List<String> imagesToCache = <String>[
        'assets/images/voyage.webp',
        'assets/images/comsoc.webp',
        'assets/images/enactus.webp',
        'assets/images/ncs.webp',
        'assets/images/logo.webp',
      ];
      for (final String assetPath in imagesToCache) {
        precacheImage(AssetImage(assetPath), context);
      }
    });
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  void _scrollToTop() {
    _scrollController.animateTo(0,
        duration: const Duration(milliseconds: 1000), curve: Curves.easeInOut);
  }

  @override
  Widget build(BuildContext context) {
    Widget desktopUI() {
      return const Column(
        children: [
          DS1Header(),
          DS2AboutMe(),
          DS3Education(),
          DS4Experience(),
          DS6Projects(),
          DS5Extracurriculars(),
          DS7Contact(),
          DS8Footer(),
        ],
      );
    }

    Widget mobileUI() {
      return const Column(
        children: [
          MS1Header(),
          MS2AboutMe(),
          MS3Education(),
          MS4Experience(),
          MS6Projects(),
          MS5Extracurriculars(),
          MS7Contact(),
          MS8Footer(),
        ],
      );
    }

    return Scaffold(
      appBar: ResponsiveScreenProvider.isDesktopScreen(context)
          ? null
          : AppBar(elevation: 0.0),
      drawer: ResponsiveScreenProvider.isDesktopScreen(context)
          ? null
          : NavBar().mobileNavBar(),
      body: SingleChildScrollView(
        controller: _scrollController,
        physics: const BouncingScrollPhysics(),
        child: Container(
          color: Theme.of(context).colorScheme.surface,
          child: ResponsiveScreenProvider.isDesktopScreen(context)
              ? desktopUI()
              : mobileUI(),
        ),
      ),
      floatingActionButton: _showBackToTopButton == false
          ? null
          : FloatingActionButton(
              onPressed: _scrollToTop,
              tooltip: 'Go to top',
              backgroundColor: AppThemeData.buttonPrimary,
              foregroundColor: AppThemeData.iconSecondary,
              child: const Icon(
                Icons.arrow_upward_rounded,
              ),
            ),
    );
  }
}
