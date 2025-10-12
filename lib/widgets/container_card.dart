import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'dart:developer';

import '../theme/app_theme.dart';
import '../widgets/text_pairs.dart';
import 'button_text.dart';
import 'package:seo/seo.dart';

class ContainerCard {
  Widget type1({
    required String title,
    required String description,
    required String image,
    required String message,
    required Uri url,
  }) {
    return Builder(builder: (context) {
      return Container(
      decoration: BoxDecoration(
        color: Theme.of(context).brightness == Brightness.dark
            ? AppThemeData.cardGrey
            : Theme.of(context).colorScheme.surfaceVariant,
        borderRadius: BorderRadius.circular(10.0),
        boxShadow: [
          Theme.of(context).brightness == Brightness.dark
              ? BoxShadow(
                  color: Colors.black.withOpacity(0.2),
                  spreadRadius: 1,
                  blurRadius: 3,
                  offset: const Offset(0, 3),
                )
              : const BoxShadow(
                  color: Color(0x22000000),
                  spreadRadius: 0,
                  blurRadius: 6,
                  offset: Offset(0, 3),
                ),
        ],
      ),
      child: Padding(
        padding: const EdgeInsets.all(30.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Builder(
                  builder: (context) {
                    return Seo.image(
                      src: image,
                      alt: title,
                      child: Builder(builder: (context) {
                        final double dpr = MediaQuery.of(context).devicePixelRatio;
                        return Image.asset(
                          image,
                          height: 70.0,
                          width: 70.0,
                          cacheHeight: (70.0 * dpr).round(),
                          cacheWidth: (70.0 * dpr).round(),
                          errorBuilder: (context, error, stackTrace) {
                            return const SizedBox(height: 70.0, width: 70.0);
                          },
                        );
                      }),
                    );
                  },
                ),
                const SizedBox(height: 20.0),
                Seo.text(
                  text: title,
                  style: TextTagStyle.h3,
                  child: SelectableText(
                    title,
                    style: Theme.of(context).textTheme.titleMedium,
                  ),
                ),
              ],
            ),
            const SizedBox(height: 10.0),
            SelectableText(description,
                style: Theme.of(context).textTheme.labelLarge,
                textAlign: TextAlign.justify),
            const SizedBox(height: 20.0),
            // ButtonTextSmall(
            //   text: 'View More >>',
            //   message: message,
            //   url: url,
            // ),
          ],
        ),
      ),
      );
    });
  }

  Widget type2({
    required String image,
    required String title,
    required List values,
    required String message,
    required Uri url,
    required bool buttonEnabled,
  }) {
    return Builder(builder: (context) {
      return Container(
      decoration: BoxDecoration(
        color: Theme.of(context).brightness == Brightness.dark
            ? AppThemeData.cardGrey
            : Theme.of(context).colorScheme.surfaceVariant,
        borderRadius: BorderRadius.circular(10.0),
        boxShadow: [
          Theme.of(context).brightness == Brightness.dark
              ? BoxShadow(
                  color: Colors.black.withOpacity(0.2),
                  spreadRadius: 1,
                  blurRadius: 3,
                  offset: const Offset(0, 3),
                )
              : const BoxShadow(
                  color: Color(0x22000000),
                  spreadRadius: 0,
                  blurRadius: 6,
                  offset: Offset(0, 3),
                ),
        ],
      ),
      child: Padding(
        padding: const EdgeInsets.all(30.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Builder(
                  builder: (context) {
                    final String src = 'assets/images/$image.png';
                    return Seo.image(
                      src: src,
                      alt: title,
                      child: Builder(builder: (context) {
                        final double dpr = MediaQuery.of(context).devicePixelRatio;
                        return Image.asset(
                          src,
                          height: 70.0,
                          width: 70.0,
                          semanticLabel: title,
                          cacheHeight: (70.0 * dpr).round(),
                          cacheWidth: (70.0 * dpr).round(),
                          errorBuilder: (context, error, stackTrace) {
                            return const SizedBox(height: 70.0, width: 70.0);
                          },
                        );
                      }),
                    );
                  },
                ),
                const SizedBox(height: 20.0),
                Seo.text(
                  text: title,
                  style: TextTagStyle.h3,
                  child: Text(title,
                      style: Theme.of(context)
                          .textTheme
                          .titleMedium
                          ?.copyWith(color: AppThemeData.textPrimary)),
                ),
                const SizedBox(height: 10.0),
                SeoTextPairs().type2(
                  title: values[0],
                  value1: values[1],
                  value2: values[2],
                  isThreeLines: false,
                ),
                const SizedBox(height: 10.0),
                SeoTextPairs().type2(
                  title: values[3],
                  value1: values[4],
                  value2: values[5],
                  isThreeLines: false,
                ),
                const SizedBox(height: 10.0),
                SeoTextPairs().type2(
                  title: values[6],
                  value1: values[7],
                  value2: values[8],
                  isThreeLines: false,
                ),
              ],
            ),
            const SizedBox(height: 20.0),
            if (buttonEnabled == true)
              ButtonTextSmall(
                text: 'View More >>',
                message: message,
                url: url,
              ),
          ],
        ),
      ),
      );
    });
  }

  Widget type3({
    required String image,
    required String title,
    required String role,
    String? years,
    required String values,
    required String message,
    required Uri url,
    bool? isButtonEnabled,
    String buttonText = 'Dive in >>',
  }) {
    return Builder(builder: (context) {
      return Container(
      decoration: BoxDecoration(
        color: Theme.of(context).brightness == Brightness.dark
            ? AppThemeData.cardGrey
            : Theme.of(context).colorScheme.surfaceVariant,
        borderRadius: BorderRadius.circular(10.0),
        boxShadow: [
          Theme.of(context).brightness == Brightness.dark
              ? BoxShadow(
                  color: Colors.black.withOpacity(0.2),
                  spreadRadius: 1,
                  blurRadius: 3,
                  offset: const Offset(0, 3),
                )
              : const BoxShadow(
                  color: Color(0x22000000),
                  spreadRadius: 0,
                  blurRadius: 6,
                  offset: Offset(0, 3),
                ),
        ],
      ),
      child: Padding(
        padding: const EdgeInsets.all(30.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Builder(
                  builder: (context) {
                    final String src = 'assets/images/$image.png';
                    return Seo.image(
                      src: src,
                      alt: title,
                      child: Builder(builder: (context) {
                        final double dpr = MediaQuery.of(context).devicePixelRatio;
                        return Image.asset(
                          src,
                          height: 70.0,
                          width: 70.0,
                          semanticLabel: title,
                          cacheHeight: (70.0 * dpr).round(),
                          cacheWidth: (70.0 * dpr).round(),
                          errorBuilder: (context, error, stackTrace) {
                            return const SizedBox(height: 70.0, width: 70.0);
                          },
                        );
                      }),
                    );
                  },
                ),
                const SizedBox(height: 20.0),
                Text(title,
                    style: Theme.of(context)
                        .textTheme
                        .titleMedium
                        ?.copyWith(color: AppThemeData.textPrimary)),
                const SizedBox(height: 10.0),
                SeoTextPairs().type2(
                  title: role,
                  value1: years ?? '',
                  value2: values,
                  isThreeLines: true,
                ),
              ],
            ),
            const SizedBox(height: 20.0),
            if (isButtonEnabled == null)
              Text(
                '',
                style: Theme.of(context).textTheme.labelMedium,
              )
            else if (isButtonEnabled == true)
              ButtonTextSmall(
                text: buttonText,
                message: message,
                url: url,
              )
            else if (isButtonEnabled == false)
              Text(
                'Stay tuned :)',
                style: Theme.of(context).textTheme.labelMedium,
              ),
          ],
        ),
      ),
      );
    });
  }

  Widget type4({
    required String image,
    required String title,
    required String message,
    required Uri url,
  }) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Tooltip(
          message: 'Visit $message',
          child: MouseRegion(
            cursor: SystemMouseCursors.click,
            child: GestureDetector(
              onTap: () async {
                if (!await launchUrl(url)) {
                  throw 'Could not launch $url';
                }
                log("Direct to: $url");
              },
              child: Text(
                message,
                style: TextStyle(
                  fontSize:
                      AppThemeData.darkTheme.textTheme.labelLarge!.fontSize,
                  fontWeight:
                      AppThemeData.darkTheme.textTheme.labelLarge!.fontWeight,
                  color: AppThemeData.textWhite,
                ),
              ),
            ),
          ),
        ),
      ],
    );
  }
}
