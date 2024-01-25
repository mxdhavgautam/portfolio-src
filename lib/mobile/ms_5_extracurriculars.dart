import 'package:flutter/material.dart';

import '../statics/data_values.dart';
import '../statics/key_holders.dart';
import '../theme/app_theme.dart';
//import '../widgets/container_banner.dart';
import '../widgets/container_card.dart';
import '../widgets/frame_title.dart';

class MS5Extracurriculars extends StatelessWidget {
  const MS5Extracurriculars({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      key: KeyHolders.volunteeringKey,
      color: AppThemeData.backgroundGrey,
      child: Padding(
        padding: const EdgeInsets.all(40.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const FrameTitle(
                title: DataValues.extracTitle,
                description: DataValues.extracDescription),
            const SizedBox(height: 30.0),
            ContainerCard().type3(
              image: 'comsoc',
              title: DataValues.extracOrg4Title,
              role: DataValues.extracOrg4Role,
              years: DataValues.extracOrg4Years,
              values: DataValues.extracOrg4Vales,
              message: '',
              url: DataValues.blankURL,
              isButtonEnabled: null,
            ),
            const SizedBox(height: 20.0),
            ContainerCard().type3(
              image: 'enactus',
              title: DataValues.extracOrg1Title,
              role: DataValues.extracOrg1Role,
              years: DataValues.extracOrg1Years,
              values: DataValues.extracOrg1Vales,
              message: '',
              url: DataValues.blankURL,
              isButtonEnabled: null,
            ),
            const SizedBox(height: 20.0),
            ContainerCard().type2(
              image: 'ncs',
              title: DataValues.extracOrg2Title,
              buttonEnabled: false,
              values: [
                DataValues.extracOrg2Activity1Name,
                DataValues.extracOrg2Activity1Grade,
                DataValues.extracOrg2Activity1Year,
                DataValues.extracOrg2Activity2Name,
                DataValues.extracOrg2Activity2Grade,
                DataValues.extracOrg2Activity2Year,
                DataValues.extracOrg2Activity3Name,
                DataValues.extracOrg2Activity3Grade,
                DataValues.extracOrg2Activity3Year,
              ],
              message: DataValues.blankURL.toString(),
              url: DataValues.blankURL,
            ),
            const SizedBox(height: 20.0),
            ContainerCard().type2(
              image: 'ncs',
              title: DataValues.extracOrg3Title,
              buttonEnabled: false,
              values: [
                DataValues.extracOrg2Activity4Name,
                DataValues.extracOrg2Activity4Grade,
                DataValues.extracOrg2Activity4Year,
                DataValues.extracOrg2Activity5Name,
                DataValues.extracOrg2Activity5Grade,
                DataValues.extracOrg2Activity5Year,
                DataValues.extracOrg2Activity6Name,
                DataValues.extracOrg2Activity6Grade,
                DataValues.extracOrg2Activity6Year,
              ],
              message: DataValues.blankURL.toString(),
              url: DataValues.blankURL,
            ),
          ],
        ),
      ),
    );
  }
}
