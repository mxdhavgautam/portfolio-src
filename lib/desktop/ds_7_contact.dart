import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../statics/data_values.dart';
import '../statics/key_holders.dart';
import '../theme/app_theme.dart';
//import '../widgets/container_banner.dart';
import '../widgets/frame_title.dart';
import '../widgets/social_profiles.dart';

class DS7Contact extends StatelessWidget {
  const DS7Contact({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      key: KeyHolders.contactKey,
      color: Theme.of(context).colorScheme.surface,
      child: Padding(
        padding: const EdgeInsets.all(40.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const FrameTitle(
                title: DataValues.contactTitle,
                description: DataValues.contactDescription),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                SelectableText(DataValues.contactBanner,
                    style: Theme.of(context).textTheme.titleMedium),
                const SizedBox(width: 5.0),
                MouseRegion(
                  cursor: SystemMouseCursors.click,
                  child: GestureDetector(
                    onTap: () {
                      Clipboard.setData(
                        const ClipboardData(text: DataValues.contactEmail),
                      );
                      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                        content: Text(
                          'Email successfully copied to clipboard',
                          textAlign: TextAlign.center,
                          style: Theme.of(context).textTheme.bodyLarge,
                        ),
                        duration: const Duration(seconds: 2),
                      ));
                    },
                    child: Tooltip(
                      message: 'Click to copy email to clipboard',
                      child: Text(
                        DataValues.contactEmail,
                        style: Theme.of(context)
                            .textTheme
                            .titleMedium
                            ?.copyWith(color: AppThemeData.textPrimary),
                      ),
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(
              height: 40.0,
            ),
            const SocialProfiles(),
            // const SizedBox(
            //   height: 20.0,
            // ),
            // ContainerBanner().type2(
            //   message:
            //       'Click on the icons above to visit my respective profile pages >>',
            //   url: DataValues.profilesURL,
            // ),
          ],
        ),
      ),
    );
  }
}
