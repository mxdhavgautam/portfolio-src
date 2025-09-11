import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'dart:developer';

class ButtonIcon {
  final String name;
  final Uri url;
  final double height;
  final double width;

  ButtonIcon(
      {required this.name,
      required this.url,
      this.height = 30.0,
      this.width = 30.0});

  Widget returnButton() {
    return MouseRegion(
      cursor: SystemMouseCursors.click,
      child: GestureDetector(
        onTap: () async {
          if (!await launchUrl(url)) {
            throw 'Could not launch $url';
          }
          log("Direct to: $url");
        },
        child: Tooltip(
          message: url.toString(),
          child: Builder(
            builder: (context) {
              final double dpr = MediaQuery.of(context).devicePixelRatio;
              final bool isLight = Theme.of(context).brightness == Brightness.light;
              final String assetName = isLight ? '${name}-light' : name;
              return Image.asset(
                'assets/icons/$assetName.png',
                height: height,
                width: width,
                semanticLabel: name,
                cacheHeight: (height * dpr).round(),
                cacheWidth: (width * dpr).round(),
                errorBuilder: (context, error, stack) {
                  // Fallback to default icon if light variant is missing
                  return Image.asset(
                    'assets/icons/$name.png',
                    height: height,
                    width: width,
                    semanticLabel: name,
                    cacheHeight: (height * dpr).round(),
                    cacheWidth: (width * dpr).round(),
                  );
                },
              );
            },
          ),
        ),
      ),
    );
  }
}
