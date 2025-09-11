import 'package:flutter/material.dart';

class AppThemeData {
  // Colors: Main Colors
  static const Color primaryColor = Color(0xFFE53935);
  static const Color secondaryColor = Color.fromRGBO(131, 121, 121, 1);

  // Colors: Text
  static const textPrimary = primaryColor;
  static const textWhite = Color.fromRGBO(255, 255, 255, 1.0);
  static const textGreyDark = Color.fromRGBO(147, 147, 147, 1.0);
  static const textGreyLight = Color.fromRGBO(205, 205, 205, 1.0);
  static const textCursor = Color.fromRGBO(61, 61, 61, 1.0);

  // Colors: Buttons and Icons
  static const buttonPrimary = primaryColor;
  static const buttonSecondary = Color.fromRGBO(50, 50, 50, 1.0);
  static const iconPrimary = primaryColor;
  static const iconSecondary = Color.fromRGBO(255, 255, 255, 1.0);

  // Colors: Background and Cards
  static const backgroundBlack = Color.fromRGBO(18, 18, 18, 1);
  static const backgroundGrey = Color.fromRGBO(25, 25, 25, 1);
  static const cardGrey = Color.fromRGBO(15, 15, 15, 1.0);
  static const tooltip = Color.fromRGBO(33, 33, 33, 1.0);

  // Colors: Opacity
  static const opacityPrimary = Color.fromRGBO(229, 57, 53, 1.0);
  static const opacitySecondary = Color.fromRGBO(0, 0, 0, 0.5019607843137255);

  // Radius
  static const double cornerRadiusCard = 40.0;
  static const double cornerRadiusCardButton = 30.0;

  // Dark Theme
  static final ThemeData darkTheme = ThemeData(
    brightness: Brightness.dark,
    primaryColor: primaryColor,
    scaffoldBackgroundColor: secondaryColor,
    cardColor: cardGrey,
    fontFamily: 'Poppins',
    iconTheme: const IconThemeData(color: iconPrimary),
    textSelectionTheme: const TextSelectionThemeData(
      cursorColor: primaryColor,
      selectionColor: textCursor,
      selectionHandleColor: textPrimary,
    ),
    tooltipTheme: const TooltipThemeData(
      decoration: BoxDecoration(
        color: tooltip,
        border: Border(
          top: BorderSide(color: textGreyDark, width: 1.0),
          left: BorderSide(color: textGreyDark, width: 1.0),
          right: BorderSide(color: textGreyDark, width: 1.0),
          bottom: BorderSide(color: textGreyDark, width: 1.0),
        ),
        borderRadius: BorderRadius.all(Radius.circular(4.0)),
      ),
      textStyle: TextStyle(color: textWhite),
    ),
    snackBarTheme: const SnackBarThemeData(
      backgroundColor: primaryColor,
      contentTextStyle: TextStyle(color: textWhite),
      actionTextColor: textWhite,
    ),
    textTheme: const TextTheme(
      displayMedium: TextStyle(
        fontSize: 54.0,
        fontWeight: FontWeight.w700,
        color: textWhite,
      ),
      displaySmall: TextStyle(
          fontSize: 42.0,
          fontWeight: FontWeight.w700,
          color: AppThemeData.textWhite),
      headlineSmall: TextStyle(
          fontSize: 28.0,
          fontWeight: FontWeight.w700,
          color: AppThemeData.textPrimary),
      titleLarge: TextStyle(
          fontSize: 20.0,
          fontWeight: FontWeight.w500,
          color: AppThemeData.textGreyDark),
      titleMedium: TextStyle(
          fontSize: 18.0,
          fontWeight: FontWeight.w500,
          color: AppThemeData.textWhite),
      titleSmall: TextStyle(
          fontSize: 16.0,
          fontWeight: FontWeight.w400,
          color: AppThemeData.textGreyLight),
      labelLarge: TextStyle(
          fontSize: 14.0,
          fontWeight: FontWeight.w400,
          color: AppThemeData.textGreyDark),
      labelMedium: TextStyle(
          fontSize: 12.0,
          fontWeight: FontWeight.w500,
          color: AppThemeData.textWhite),
    ),
    colorScheme: const ColorScheme.dark().copyWith(
      surface: backgroundBlack,
      primary: primaryColor,
      onSurface: textWhite,
      surfaceVariant: Color(0xFF1F1F1F),
    ),
  );

  // Light Theme
  static final ThemeData lightTheme = ThemeData(
    brightness: Brightness.light,
    primaryColor: primaryColor,
    scaffoldBackgroundColor: const Color(0xFFFFFFFF),
    cardColor: Color(0xFFF2F2F2),
    fontFamily: 'Poppins',
    iconTheme: const IconThemeData(color: primaryColor),
    textSelectionTheme: const TextSelectionThemeData(
      cursorColor: primaryColor,
      selectionColor: Color(0xFFFFCDD2),
      selectionHandleColor: primaryColor,
    ),
    tooltipTheme: const TooltipThemeData(
      decoration: BoxDecoration(
        color: Color(0xFFFFFFFF),
        border: Border(
          top: BorderSide(color: Color(0xFFBDBDBD), width: 1.0),
          left: BorderSide(color: Color(0xFFBDBDBD), width: 1.0),
          right: BorderSide(color: Color(0xFFBDBDBD), width: 1.0),
          bottom: BorderSide(color: Color(0xFFBDBDBD), width: 1.0),
        ),
        borderRadius: BorderRadius.all(Radius.circular(4.0)),
      ),
      textStyle: TextStyle(color: Color(0xFF212121)),
    ),
    snackBarTheme: const SnackBarThemeData(
      backgroundColor: primaryColor,
      contentTextStyle: TextStyle(color: Colors.white),
      actionTextColor: Colors.white,
    ),
    textTheme: const TextTheme(
      displayMedium: TextStyle(
        fontSize: 54.0,
        fontWeight: FontWeight.w700,
        color: Color(0xFF212121),
      ),
      displaySmall: TextStyle(
          fontSize: 42.0,
          fontWeight: FontWeight.w700,
          color: Color(0xFF212121)),
      headlineSmall: TextStyle(
          fontSize: 28.0,
          fontWeight: FontWeight.w700,
          color: primaryColor),
      titleLarge: TextStyle(
          fontSize: 20.0,
          fontWeight: FontWeight.w500,
          color: Color(0xFF616161)),
      titleMedium: TextStyle(
          fontSize: 18.0,
          fontWeight: FontWeight.w500,
          color: Color(0xFF212121)),
      titleSmall: TextStyle(
          fontSize: 16.0,
          fontWeight: FontWeight.w400,
          color: Color(0xFF757575)),
      labelLarge: TextStyle(
          fontSize: 14.0,
          fontWeight: FontWeight.w400,
          color: Color(0xFF616161)),
      labelMedium: TextStyle(
          fontSize: 12.0,
          fontWeight: FontWeight.w500,
          color: Color(0xFF212121)),
    ),
    colorScheme: const ColorScheme.light().copyWith(
      surface: Colors.white,
      primary: primaryColor,
      secondary: Color(0xFF9E9E9E),
      onSurface: Color(0xFF212121),
      surfaceVariant: Color(0xFFF7F7F7),
    ),
  );
}
