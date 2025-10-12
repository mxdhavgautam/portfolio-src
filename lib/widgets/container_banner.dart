import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'dart:developer';

import '../theme/app_theme.dart';
import 'button_rectangle.dart';

class ContainerBanner {
  Widget type1(
      {required bool isDesktop,
      required String title1,
      required String title2,
      required String description,
      required String image,
      required String message,
      required Uri url}) {
    return Container(
      color: Theme.of(context).colorScheme.surface,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              isDesktop
                  ? Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        SelectableText(
                          title1,
                          style: Theme.of(context).textTheme.titleLarge,
                        ),
                        const SizedBox(width: 4.0),
                        SelectableText(
                          title2,
                          style: Theme.of(context)
                              .textTheme
                              .titleLarge
                              ?.copyWith(color: AppThemeData.textPrimary),
                        ),
                      ],
                    )
                  : Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        SelectableText(
                          title1,
                          style: Theme.of(context).textTheme.titleLarge,
                        ),
                        const SizedBox(width: 4.0),
                        SelectableText(
                          title2,
                          style: Theme.of(context)
                              .textTheme
                              .titleLarge
                              ?.copyWith(color: AppThemeData.textPrimary),
                        ),
                      ],
                    ),
              const SizedBox(height: 5.0),
              SelectableText(
                description,
                style: Theme.of(context).textTheme.labelLarge,
                textAlign: TextAlign.justify,
              ),
            ],
          ),
          const SizedBox(height: 20.0),
          ButtonRectangle(
            name: message,
            color: Theme.of(context).brightness == Brightness.dark
                ? AppThemeData.buttonSecondary
                : const Color(0xFFE0E0E0),
            message: url.toString(),
            onPressed: () async {
              if (!await launchUrl(url)) {
                throw 'Could not launch $url';
              }
              log("Direct to: $url");
            },
          )
        ],
      ),
    );
  }

  Widget type2({required String message, required Uri url}) {
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
          child: Text(
            message,
            textAlign: TextAlign.center,
            style: Theme.of(context).textTheme.labelLarge,
          ),
        ),
      ),
    );
  }
}
