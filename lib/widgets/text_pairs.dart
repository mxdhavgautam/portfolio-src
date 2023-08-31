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
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            _wrapWithSeo(
              text: title,
              style: AppThemeData.darkTheme.textTheme.titleMedium!,
              tagStyle: TextTagStyle.h1,
            ),
          ],
        ),
        const SizedBox(height: 10.0),
        _wrapWithSeo(
          text: description,
          style: AppThemeData.darkTheme.textTheme.labelLarge!,
          tagStyle: TextTagStyle.p,
        ),
      ],
    );
  }

  Widget type2({
    required String title,
    required String value1,
    required String value2,
    required bool isThreeLines,
  }) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _wrapWithSeo(
          text: title,
          style: TextStyle(
            fontSize: AppThemeData.darkTheme.textTheme.titleSmall!.fontSize,
            fontWeight: AppThemeData.darkTheme.textTheme.titleSmall!.fontWeight,
            color: AppThemeData.textWhite,
          ),
          tagStyle: TextTagStyle.h2,
        ),
        _wrapWithSeo(
          text: value1,
          style: TextStyle(
            fontSize: AppThemeData.darkTheme.textTheme.labelLarge!.fontSize,
            fontWeight: AppThemeData.darkTheme.textTheme.labelLarge!.fontWeight,
            color: AppThemeData.textGreyDark,
          ),
          tagStyle: TextTagStyle.p,
        ),
        isThreeLines ? const SizedBox(height: 20.0) : Container(),
        _wrapWithSeo(
          text: value2,
          style: TextStyle(
            fontSize: AppThemeData.darkTheme.textTheme.labelLarge!.fontSize,
            fontWeight: AppThemeData.darkTheme.textTheme.labelLarge!.fontWeight,
            color: AppThemeData.textGreyDark,
          ),
          tagStyle: TextTagStyle.p,
        ),
      ],
    );
  }

  Widget type3({
    required String title,
    required String value1,
    required String value2,
  }) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _wrapWithSeo(
          text: title,
          style: TextStyle(
            fontSize: AppThemeData.darkTheme.textTheme.titleSmall!.fontSize,
            fontWeight: AppThemeData.darkTheme.textTheme.titleSmall!.fontWeight,
            color: AppThemeData.textWhite,
          ),
          tagStyle: TextTagStyle.h3,
        ),
        _wrapWithSeo(
          text: value1,
          style: TextStyle(
            fontSize: AppThemeData.darkTheme.textTheme.labelLarge!.fontSize,
            fontWeight: AppThemeData.darkTheme.textTheme.labelLarge!.fontWeight,
            color: AppThemeData.textGreyDark,
          ),
          tagStyle: TextTagStyle.p,
        ),
        const SizedBox(height: 20.0),
        _wrapWithSeo(
          text: value2,
          style: TextStyle(
            fontSize: AppThemeData.darkTheme.textTheme.labelLarge!.fontSize,
            fontWeight: AppThemeData.darkTheme.textTheme.labelLarge!.fontWeight,
            color: AppThemeData.textGreyDark,
          ),
          tagStyle: TextTagStyle.p,
        ),
      ],
    );
  }
}
