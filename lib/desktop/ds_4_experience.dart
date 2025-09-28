import 'package:flutter/material.dart';

import '../statics/data_values.dart';
import '../statics/key_holders.dart';
import '../theme/app_theme.dart';
import '../widgets/container_card.dart';
import '../widgets/frame_title.dart';

class DS4Experience extends StatelessWidget {
  const DS4Experience({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      key: KeyHolders.experienceKey,
      color: Theme.of(context).colorScheme.surface,
      child: Padding(
        padding: const EdgeInsets.all(40.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const FrameTitle(
                title: DataValues.experienceTitle,
                description: DataValues.experienceDescription),
            LayoutBuilder(
              builder: (context, constraints) {
                final double spacing = MediaQuery.of(context).size.width * 0.02;
                final double itemWidth = (constraints.maxWidth - spacing * 2) / 3;
                return Wrap(
                  spacing: spacing,
                  runSpacing: 30.0,
                  alignment: WrapAlignment.center,
                  children: [
                    SizedBox(
                      width: itemWidth,
                      child: RepaintBoundary(child: ContainerCard().type3(
                        image: 'mod',
                        title: DataValues.experienceOrg1Title,
                        role: DataValues.experienceOrg1Role,
                        years: DataValues.experienceOrg1Years,
                        values: DataValues.experienceOrg1Vales,
                        message: 'View my Internship Completion Certificate',
                        url: Uri.parse('https://drive.google.com/file/d/1koGRWt7gK_vAiK3fTFFl0i-HT11t6icd/view?usp=sharing'),
                        isButtonEnabled: true,
                      )),
                    ),
                    SizedBox(
                      width: itemWidth,
                      child: RepaintBoundary(child: ContainerCard().type3(
                        image: 'hcl',
                        title: DataValues.experienceOrg2Title,
                        role: DataValues.experienceOrg2Role,
                        years: DataValues.experienceOrg2Years,
                        values: DataValues.experienceOrg2Vales,
                        message: 'View my Internship Completion Certificate',
                        url: Uri.parse('https://drive.google.com/file/d/15zI4GRXVM-6J9CvhuwxzudmmU48hk69s/view?usp=sharing'),
                        isButtonEnabled: true,
                      )),
                    ),
                    SizedBox(
                      width: itemWidth,
                      child: RepaintBoundary(child: ContainerCard().type3(
                        image: 'cr3ate',
                        title: DataValues.experienceOrg3Title,
                        role: DataValues.experienceOrg3Role,
                        years: DataValues.experienceOrg3Years,
                        values: DataValues.experienceOrg3Vales,
                        message: 'Visit cr3ate.ai',
                        url: Uri.parse('https://cr3ate.ai'),
                        isButtonEnabled: true,
                        buttonText: 'Check out CR3ATE.AI >>',
                      )),
                    ),
                  ],
                );
              },
            ),
            const SizedBox(height: 40.0),
          ],
        ),
      ),
    );
  }
}
