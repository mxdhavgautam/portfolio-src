import 'package:flutter/material.dart';
import 'package:seo/seo.dart';
import '../theme/app_theme.dart';

class SeoTextPairs {
  Widget _wrapWithSeo({
    required String text,
    required TextStyle style,
    required TextTagStyle? tagStyle,
  }) {
    return Seo.text(
      text: text,
      style: tagStyle ?? TextTagStyle.p,
      child: Text(
        text,
        style: style,
      ),
    );
  }

  Widget type1({required String title, required String description}) {
    return Builder(builder: (context) => Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            _wrapWithSeo(
              text: title,
              style: Theme.of(context).textTheme.titleMedium!,
              tagStyle: TextTagStyle.h1,
            ),
          ],
        ),
        const SizedBox(height: 10.0),
        _wrapWithSeo(
          text: description,
          style: Theme.of(context).textTheme.labelLarge!,
          tagStyle: TextTagStyle.p,
        ),
      ],
    ));
  }

  Widget type2({
    required String title,
    required String value1,
    required String value2,
    required bool isThreeLines,
  }) {
    return Builder(builder: (context) => Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _wrapWithSeo(
          text: title,
          style: Theme.of(context).textTheme.titleSmall!,
          tagStyle: TextTagStyle.h2,
        ),
        Text(
          value1,
          style: Theme.of(context).textTheme.labelLarge!.copyWith(
                color: Theme.of(context).brightness == Brightness.light
                    ? const Color(0xFF424242)
                    : Theme.of(context).textTheme.labelLarge!.color,
              ),
        ),
        isThreeLines ? const SizedBox(height: 20.0) : Container(),
        Text(
          value2,
          style: Theme.of(context).textTheme.labelLarge!.copyWith(
                color: Theme.of(context).brightness == Brightness.light
                    ? const Color(0xFF424242)
                    : Theme.of(context).textTheme.labelLarge!.color,
              ),
        ),
      ],
    ));
  }

  Widget type3({
    required String title,
    required String value1,
    required String value2,
  }) {
    return Builder(builder: (context) => Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _wrapWithSeo(
          text: title,
          style: Theme.of(context).textTheme.titleSmall!,
          tagStyle: TextTagStyle.h3,
        ),
        Text(
          value1,
          style: Theme.of(context).textTheme.labelLarge!.copyWith(
                color: Theme.of(context).brightness == Brightness.light
                    ? const Color(0xFF424242)
                    : Theme.of(context).textTheme.labelLarge!.color,
              ),
        ),
        const SizedBox(height: 20.0),
        Text(
          value2,
          style: Theme.of(context).textTheme.labelLarge!.copyWith(
                color: Theme.of(context).brightness == Brightness.light
                    ? const Color(0xFF424242)
                    : Theme.of(context).textTheme.labelLarge!.color,
              ),
        ),
      ],
    ));
  }
}
