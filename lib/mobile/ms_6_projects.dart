import 'package:flutter/material.dart';

import '../statics/data_values.dart';
import '../statics/key_holders.dart';
import '../theme/app_theme.dart';
import '../widgets/container_card.dart';
import '../widgets/frame_title.dart';

class MS6TechNotes extends StatelessWidget {
  const MS6TechNotes({Key? key}) : super(key: key);

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
            const SizedBox(height: 30.0),
            ContainerCard().type3(
              image: 'portfolio',
              title: DataValues.projectsOrg1Title,
              role: DataValues.projectsOrg1Role,
              years: DataValues.projectsOrg1Years,
              values: DataValues.projectsOrg1Vales,
              message: DataValues.siteUrl.toString(),
              url: DataValues.siteUrl,
              isButtonEnabled: true,
            ),
            // const SizedBox(height: 20.0),
            // ContainerCard().type3(
            //   image: '',
            //   title: '',
            //   role: '',
            //   years: '',
            //   values: '',
            //   message: '',
            //   url: DataValues.blankURL,
            //   isButtonEnabled: false,
            // ),
          ],
        ),
      ),
    );
  }
}
