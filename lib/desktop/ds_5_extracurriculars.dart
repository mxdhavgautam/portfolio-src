import 'package:flutter/material.dart';

import '../statics/data_values.dart';
import '../statics/key_holders.dart';
import '../theme/app_theme.dart';
//import '../widgets/container_banner.dart';
import '../widgets/container_card.dart';
import '../widgets/frame_title.dart';

class DS5Volunteering extends StatelessWidget {
  const DS5Volunteering({Key? key}) : super(key: key);

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
                title: DataValues.volunteeringTitle,
                description: DataValues.volunteeringDescription),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Expanded(
                  child: ContainerCard().type3(
                    image: 'enactus',
                    title: DataValues.volunteeringOrg1Title,
                    role: DataValues.volunteeringOrg1Role,
                    years: DataValues.volunteeringOrg1Years,
                    values: DataValues.volunteeringOrg1Vales,
                    message: DataValues.blankURL.toString(),
                    url: DataValues.blankURL,
                    isButtonEnabled: null,
                  ),
                ),
                SizedBox(width: MediaQuery.of(context).size.width * 0.05),
                Expanded(
                  child: ContainerCard().type2(
                    image: 'ncs',
                    title: DataValues.extracOrg1Title,
                    buttonEnabled: false,
                    values: [
                      DataValues.extracOrg1Activity1Name,
                      DataValues.extracOrg1Activity1Grade,
                      DataValues.extracOrg1Activity1Year,
                      DataValues.extracOrg1Activity2Name,
                      DataValues.extracOrg1Activity2Grade,
                      DataValues.extracOrg1Activity2Year,
                      DataValues.extracOrg1Activity3Name,
                      DataValues.extracOrg1Activity3Grade,
                      DataValues.extracOrg1Activity3Year,
                    ],
                    message: DataValues.blankURL.toString(),
                    url: DataValues.blankURL,
                  ),
                ),
                SizedBox(width: MediaQuery.of(context).size.width * 0.05),
                Expanded(
                  child: ContainerCard().type2(
                    image: 'ncs',
                    title: DataValues.extracOrg2Title,
                    buttonEnabled: false,
                    values: [
                      DataValues.extracOrg1Activity4Name,
                      DataValues.extracOrg1Activity4Grade,
                      DataValues.extracOrg1Activity4Year,
                      DataValues.extracOrg1Activity5Name,
                      DataValues.extracOrg1Activity5Grade,
                      DataValues.extracOrg1Activity5Year,
                      DataValues.extracOrg1Activity6Name,
                      DataValues.extracOrg1Activity6Grade,
                      DataValues.extracOrg1Activity6Year,
                    ],
                    message: DataValues.blankURL.toString(),
                    url: DataValues.blankURL,
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
