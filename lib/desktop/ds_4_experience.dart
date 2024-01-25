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
      color: AppThemeData.backgroundGrey,
      child: Padding(
        padding: const EdgeInsets.all(40.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const FrameTitle(
                title: DataValues.experienceTitle,
                description: DataValues.experienceDescription),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Expanded(
                  child: ContainerCard().type3(
                    image: 'mod',
                    title: DataValues.experienceOrg1Title,
                    role: DataValues.experienceOrg1Role,
                    years: DataValues.experienceOrg1Years,
                    values: DataValues.experienceOrg1Vales,
                    message: 'View my Internship Completion Certificate',
                    url: Uri.parse(
                        'https://drive.google.com/file/d/1koGRWt7gK_vAiK3fTFFl0i-HT11t6icd/view?usp=sharing'),
                    isButtonEnabled: true,
                  ),
                ),
                SizedBox(width: MediaQuery.of(context).size.width * 0.05),
                Expanded(
                  child: ContainerCard().type3(
                    image: 'hcl',
                    title: DataValues.experienceOrg2Title,
                    role: DataValues.experienceOrg2Role,
                    years: DataValues.experienceOrg2Years,
                    values: DataValues.experienceOrg2Vales,
                    message: 'View my Internship Completion Certificate',
                    url: Uri.parse(
                        'https://drive.google.com/file/d/15zI4GRXVM-6J9CvhuwxzudmmU48hk69s/view?usp=sharing'),
                    isButtonEnabled: true,
                  ),
                ),
              ],
            ),
            const SizedBox(height: 40.0),
          ],
        ),
      ),
    );
  }
}
