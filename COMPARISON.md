# Flutter vs Next.js Component Comparison

This document shows side-by-side comparisons of major components converted from Flutter to Next.js.

---

## 1. ButtonRectangle Component

### Flutter (Dart)
```dart
// lib/widgets/button_rectangle.dart
import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class ButtonRectangle extends StatelessWidget {
  final String name;
  final VoidCallback onPressed;
  final Color color;
  final String message;

  const ButtonRectangle({
    super.key,
    required this.name,
    required this.onPressed,
    required this.color,
    required this.message,
  });

  @override
  Widget build(BuildContext context) {
    return Tooltip(
      message: message,
      child: ElevatedButton(
        onPressed: onPressed,
        style: ElevatedButton.styleFrom(
          backgroundColor: color,
          foregroundColor: AppThemeData.textWhite,
          minimumSize: const Size(170.0, 50.0),
          textStyle: Theme.of(context).textTheme.titleMedium,
          elevation: 0.0,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(30.0),
          ),
        ),
        child: Text(name),
      ),
    );
  }
}
```

### Next.js (TypeScript/React)
```typescript
// components/shared/button-rectangle.tsx
interface ButtonRectangleProps {
  name: string
  onPressed: () => void
  color: string
  message: string
}

export function ButtonRectangle({
  name,
  onPressed,
  color,
  message,
}: ButtonRectangleProps) {
  return (
    <button
      onClick={onPressed}
      title={message}
      className="min-w-[170px] h-[50px] px-6 rounded-[30px] text-white font-medium text-lg transition-opacity hover:opacity-90"
      style={{ backgroundColor: color }}
    >
      {name}
    </button>
  )
}
```

**Key Differences:**
- Flutter uses `Widget` classes, Next.js uses functional components
- Flutter's `Tooltip` → HTML `title` attribute
- Flutter's `ElevatedButton` → HTML `<button>` with Tailwind classes
- Flutter's `VoidCallback` → TypeScript function type `() => void`
- Styling: Flutter's `styleFrom` → Tailwind CSS classes + inline styles

---

## 2. FrameTitle Component

### Flutter (Dart)
```dart
// lib/widgets/frame_title.dart
import 'package:mxdhavgautam/theme/responsive_screen_provider.dart';
import 'package:flutter/material.dart';
import 'package:seo/seo.dart';

class FrameTitle extends StatelessWidget {
  const FrameTitle({
    super.key,
    required this.title,
    required this.description,
  });

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
```

### Next.js (TypeScript/React)
```typescript
// components/shared/frame-title.tsx
interface FrameTitleProps {
  title: string
  description: string
  isDesktop?: boolean
}

export function FrameTitle({
  title,
  description,
  isDesktop = false,
}: FrameTitleProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-[42px] font-bold text-foreground mb-2.5">
        {title}
      </h2>
      <p
        className={`text-base font-normal text-foreground/70 text-justify ${
          isDesktop ? 'px-40 pb-10' : ''
        }`}
      >
        {description}
      </p>
    </div>
  )
}
```

**Key Differences:**
- Flutter's `Seo.text` → Native HTML `<h2>` and `<p>` tags (better SEO)
- Flutter's `SelectableText` → Native HTML text (selectable by default)
- Flutter's `ResponsiveScreenProvider` → Props-based `isDesktop` flag
- Flutter's `Theme.of(context)` → Tailwind CSS classes
- Flutter's `Column` → Flexbox (`flex flex-col`)
- Flutter's `Padding` → Tailwind spacing utilities

---

## 3. ContainerCard Component

### Flutter (Dart)
```dart
// lib/widgets/container_card.dart (Type1)
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
            SelectableText(
              description,
              style: Theme.of(context).textTheme.labelLarge,
              textAlign: TextAlign.justify,
            ),
          ],
        ),
      ),
    );
  });
}
```

### Next.js (TypeScript/React)
```typescript
// components/shared/container-card.tsx
import Image from 'next/image'

interface ContainerCardType1Props {
  title: string
  description: string
  image: string
  message: string
  url: string
}

export function ContainerCardType1({
  title,
  description,
  image,
  message,
  url,
}: ContainerCardType1Props) {
  return (
    <div className="bg-card dark:bg-card-grey rounded-[10px] p-[30px] shadow-lg flex flex-col justify-between min-h-full">
      <div className="flex flex-col">
        <Image
          src={`/assets/icons/${image}.png`}
          alt={title}
          width={70}
          height={70}
          className="mb-5"
        />
        <h3 className="text-lg font-medium text-foreground mb-2.5">
          {title}
        </h3>
      </div>
      <p className="text-sm font-normal text-foreground/70 text-justify">
        {description}
      </p>
    </div>
  )
}
```

**Key Differences:**
- Flutter's `Image.asset` → Next.js `Image` component (automatic optimization)
- Flutter's `Seo.image` → Native `<img>` via Next.js Image (better SEO)
- Flutter's `Theme.of(context).brightness` → CSS `dark:` variant
- Flutter's `BoxDecoration` → Tailwind `shadow-lg`, `rounded-[10px]`
- Flutter's `MediaQuery.devicePixelRatio` → Next.js Image handles this automatically
- Flutter's `errorBuilder` → Next.js Image has built-in error handling

---

## 4. Header Component (DS1Header)

### Flutter (Dart)
```dart
// lib/desktop/ds_1_header.dart
class DS1Header extends StatelessWidget {
  const DS1Header({super.key});

  List<Widget> headerData(BuildContext context) {
    return [
      Builder(builder: (context) {
        final double dpr = MediaQuery.of(context).devicePixelRatio;
        return Image.asset(
          'assets/images/logo.webp',
          height: 250.0,
          width: 250.0,
          cacheHeight: (250.0 * dpr).round(),
          cacheWidth: (250.0 * dpr).round(),
        );
      }),
      const SizedBox(width: 60.0),
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
          : Theme.of(context).colorScheme.surfaceVariant,
      child: Padding(
        padding: const EdgeInsets.only(top: 60.0, bottom: 40.0),
        child: Column(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: headerData(context),
            ),
            const SizedBox(height: 60.0),
            NavBar().desktopNavBar(),
          ],
        ),
      ),
    );
  }
}
```

### Next.js (TypeScript/React)
```typescript
// components/desktop/ds-1-header.tsx
import Image from 'next/image'
import { NavBar } from '@/components/shared/nav-bar'
import { SocialProfiles } from '@/components/shared/social-profiles'
import { DataValues } from '@/data/data-values'

interface DS1HeaderProps {
  onNavigate: (sectionId: string) => void
}

export function DS1Header({ onNavigate }: DS1HeaderProps) {
  return (
    <div className="bg-surface-variant dark:bg-background-black pt-[60px] pb-10">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center gap-[60px]">
          <Image
            src="/assets/images/logo.webp"
            alt="Madhav Gautam logo"
            width={250}
            height={250}
            priority
          />
          <div className="flex flex-col">
            <p className="text-[28px] font-bold text-primary">
              {DataValues.headerGreetings}
            </p>
            <h1 className="text-[54px] font-bold text-white">
              {DataValues.headerName}
            </h1>
            <p className="text-xl font-medium text-grey-dark">
              {DataValues.headerTitle}
            </p>
            <div className="mt-5">
              <SocialProfiles />
            </div>
          </div>
        </div>
        <div className="mt-[60px]">
          <NavBar isDesktop={true} onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  )
}
```

**Key Differences:**
- Flutter's `StatelessWidget` → React functional component
- Flutter's `Image.asset` with `cacheHeight/Width` → Next.js `Image` with `priority` prop
- Flutter's `Seo.text` → Native HTML `<h1>` tag
- Flutter's `Row`/`Column` → Flexbox (`flex`, `flex-col`)
- Flutter's `SizedBox` → Tailwind spacing (`gap-[60px]`, `mt-5`)
- Flutter's `NavBar().desktopNavBar()` → `<NavBar>` component with props

---

## 5. Main Page Structure

### Flutter (Dart)
```dart
// lib/main.dart
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
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  void _scrollToTop() {
    _scrollController.animateTo(0,
        duration: const Duration(milliseconds: 1000),
        curve: Curves.easeInOut);
  }

  @override
  Widget build(BuildContext context) {
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
              child: const Icon(Icons.arrow_upward_rounded),
            ),
    );
  }
}
```

### Next.js (TypeScript/React)
```typescript
// app/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { DS1Header } from '@/components/desktop/ds-1-header'
import { isDesktopScreen } from '@/utils/responsive'

export default function HomePage() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(isDesktopScreen(window.innerWidth))
    }

    const handleScroll = () => {
      setShowBackToTop(window.scrollY >= 300)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-surface">
      <main className="flex flex-col">
        {isDesktop ? (
          <>
            <DS1Header onNavigate={handleNavigate} />
            {/* Other desktop sections */}
          </>
        ) : (
          <>
            {/* Mobile sections */}
          </>
        )}
      </main>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-button-primary text-icon-secondary flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity z-50"
          aria-label="Go to top"
        >
          <svg>...</svg>
        </button>
      )}
    </div>
  )
}
```

**Key Differences:**
- Flutter's `StatefulWidget` → React hooks (`useState`, `useEffect`)
- Flutter's `ScrollController` → Native `window.scrollY` and `scrollIntoView`
- Flutter's `initState`/`dispose` → React's `useEffect` with cleanup
- Flutter's `setState` → React's `useState` setters
- Flutter's `Scaffold` → Native HTML structure
- Flutter's `FloatingActionButton` → HTML `<button>` with Tailwind
- Flutter's `BouncingScrollPhysics` → Native CSS `scroll-behavior: smooth`

---

## 6. Data Values

### Flutter (Dart)
```dart
// lib/statics/data_values.dart
class DataValues {
  static const String appName = 'Madhav Gautam';
  static const String headerGreetings = "Hey! I'm";
  static Uri devURL = Uri.parse('https://mxdhavgautam.com');
  // ... more values
}
```

### Next.js (TypeScript)
```typescript
// data/data-values.ts
export class DataValues {
  static readonly appName = 'Madhav Gautam'
  static readonly headerGreetings = "Hey! I'm"
  static readonly devURL = 'https://mxdhavgautam.com'
  // ... more values
}
```

**Key Differences:**
- Flutter's `static const` → TypeScript's `static readonly`
- Flutter's `Uri.parse()` → TypeScript string literals
- Same structure, minimal changes needed

---

## Summary of Conversion Patterns

| Flutter Concept | Next.js Equivalent |
|----------------|-------------------|
| `StatelessWidget` | Functional React component |
| `StatefulWidget` | React component with hooks |
| `Widget build()` | Component return JSX |
| `Theme.of(context)` | Tailwind CSS classes + CSS variables |
| `MediaQuery` | `useEffect` + `window.innerWidth` |
| `ScrollController` | Native `window.scrollY` + `scrollIntoView` |
| `Image.asset()` | Next.js `Image` component |
| `Seo.text()` | Native HTML tags (`<h1>`, `<p>`, etc.) |
| `Row`/`Column` | Flexbox (`flex`, `flex-col`) |
| `Padding`/`SizedBox` | Tailwind spacing utilities |
| `Container` | `<div>` with Tailwind classes |
| `ElevatedButton` | `<button>` with Tailwind |
| `Text`/`SelectableText` | Native HTML text elements |
| Dark mode detection | CSS `dark:` variant + `useTheme` hook |

---

## Benefits of Next.js Version

1. **Better SEO**: Native HTML tags instead of Flutter's SEO wrapper
2. **Smaller Bundle**: No Flutter framework overhead
3. **Faster Load**: Static HTML/CSS/JS vs compiled Flutter web
4. **Better Performance**: Next.js Image optimization, code splitting
5. **Easier Maintenance**: Standard web stack, more developers familiar
6. **Better Accessibility**: Native HTML semantics
7. **Vercel Integration**: Zero-config deployment

