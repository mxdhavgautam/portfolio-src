import 'package:flutter/material.dart';

import '../statics/data_values.dart';
import '../theme/app_theme.dart';
import '../widgets/social_profiles.dart';
import 'package:seo/seo.dart';

class MS1Header extends StatelessWidget {
  const MS1Header({super.key});

  List<Widget> headerData(BuildContext context) {
    return [
      Builder(builder: (context) {
        final double dpr = MediaQuery.of(context).devicePixelRatio;
        return Image.asset(
          'assets/images/logo.png',
          height: 250.0,
          width: 250.0,
          cacheHeight: (250.0 * dpr).round(),
          cacheWidth: (250.0 * dpr).round(),
        );
      }),
      const SizedBox(height: 40.0),
      Column(
        children: [
          SelectableText(
            DataValues.headerGreetings,
            style: Theme.of(context).textTheme.headlineSmall,
          ),
          Seo.text(
            text: DataValues.headerName,
            style: TextTagStyle.h1,
            child: SelectableText(
              DataValues.headerName,
              style: Theme.of(context).textTheme.displayMedium,
              textAlign: TextAlign.center,
            ),
          ),
          SelectableText(
            DataValues.headerTitle,
            style: Theme.of(context).textTheme.titleLarge,
          ),
          const SizedBox(height: 20.0),
          const SocialProfiles(),
        ],
      ),
    ];
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Theme.of(context).brightness == Brightness.dark
          ? AppThemeData.backgroundBlack
          : Colors.white,
      child: Padding(
          padding: const EdgeInsets.only(bottom: 40.0),
          child: Column(
            children: [
              Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: headerData(context),
              ),
              const SizedBox(height: 40.0),
            ],
          )),
    );
  }
}
