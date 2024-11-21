import 'package:flutter/material.dart';

import '../statics/data_values.dart';
import '../statics/key_holders.dart';
import '../theme/app_theme.dart';
import '../widgets/container_card.dart';
import '../widgets/frame_title.dart';

class DS6Projects extends StatelessWidget {
  const DS6Projects({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      key: KeyHolders.technotesKey,
      color: AppThemeData.backgroundGrey,
      child: Padding(
        padding: const EdgeInsets.all(40.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const FrameTitle(
                title: DataValues.projectsTitle,
                description: DataValues.projectsDescription),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Expanded(
                  child: ContainerCard().type3(
                    image: 'portfolio',
                    title: DataValues.projectsOrg1Title,
                    role: DataValues.projectsOrg1Role,
                    years: DataValues.projectsOrg1Years,
                    values: DataValues.projectsOrg1Values,
                    message: DataValues.siteUrl.toString(),
                    url: DataValues.siteUrl,
                    isButtonEnabled: true,
                  ),
                ),
                SizedBox(width: MediaQuery.of(context).size.width * 0.05),
                Expanded(
                  child: ContainerCard().type3(
                    image: 'society',
                    title: DataValues.projectsOrg2Title,
                    role: DataValues.projectsOrg2Role,
                    years: DataValues.projectsOrg2Years,
                    values: DataValues.projectsOrg2Values,
                    message: DataValues.societyUrl.toString(),
                    url: DataValues.societyUrl,
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
