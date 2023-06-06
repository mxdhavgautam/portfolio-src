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
                title: DataValues.technotesTitle,
                description: DataValues.technotesDescription),
            const SizedBox(height: 30.0),
            ContainerCard().type3(
              image: 'portfolio',
              title: DataValues.technotesOrg1Title,
              role: DataValues.technotesOrg1Role,
              years: DataValues.technotesOrg1Years,
              values: DataValues.technotesOrg1Vales,
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
