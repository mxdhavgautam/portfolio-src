//import 'button_text.dart';
import 'package:flutter/material.dart';

import '../statics/data_values.dart';
import 'button_icon.dart';

class SocialProfiles extends StatelessWidget {
  const SocialProfiles({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ButtonIcon(name: 'dev', url: DataValues.devURL).returnButton(),
            const SizedBox(width: 10.0),
            ButtonIcon(name: 'github', url: DataValues.githubURL)
                .returnButton(),
            const SizedBox(width: 10.0),
            ButtonIcon(name: 'linkedin', url: DataValues.linkedinURL)
                .returnButton(),
            const SizedBox(width: 10.0),
            ButtonIcon(name: 'twitter', url: DataValues.twitterURL)
                .returnButton(),
            const SizedBox(width: 10.0),
            ButtonIcon(name: 'telegram', url: DataValues.telegramURL)
                .returnButton(),
            const SizedBox(width: 10.0),
            ButtonIcon(name: 'instagram', url: DataValues.instagramURL)
                .returnButton(),
          ],
        ),
        const SizedBox(
          height: 20,
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'My Public Profiles ^',
              style: TextStyle(color: Colors.grey.shade400),
            )
          ],
        )
      ],
    );
  }
}
