import 'package:mxdhavgautam/theme/responsive_screen_provider.dart';
import 'package:flutter/material.dart';
import 'package:seo/seo.dart';

class FrameTitle extends StatelessWidget {
  const FrameTitle({super.key, required this.title, required this.description});

  final String title;
  final String description;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        children: [
          Seo.text(
            text: title,
            style: TextTagStyle.h2,
            child: SelectableText(
              title,
              style: Theme.of(context).textTheme.displaySmall,
            ),
          ),
          Padding(
            padding: ResponsiveScreenProvider.isDesktopScreen(context)
                ? const EdgeInsets.only(
                    left: 160.0, right: 160.0, top: 10.0, bottom: 40.0)
                : EdgeInsets.zero,
            child: Seo.text(
              text: description,
              style: TextTagStyle.p,
              child: SelectableText(
                description,
                textAlign: TextAlign.justify,
                style: Theme.of(context).textTheme.titleSmall,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
