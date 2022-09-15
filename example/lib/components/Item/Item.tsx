import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import Card from "../Card/Card";
import PointLine from "../PointLine/PointLine";
import { ITimeline, ITimelineData } from "../../models";
/**
 * ? Local Imports
 */
import styles from "./Item.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ItemProps {
  style?: CustomStyleProp;
  data: ITimeline;
  list: ITimelineData[];
  isLastMember: boolean;
}

const Item: React.FC<ItemProps> = ({
  style,
  data,
  list,
  isLastMember,
  ...rest
}) => {
  const renderItem = (item: ITimelineData, index: number) => {
    return <Card {...rest} key={index} isCard data={item} />;
  };

  return (
    <View style={styles.container}>
      <PointLine
        {...rest}
        data={data.date}
        length={list.length}
        isLastMember={isLastMember}
      />
      <View style={styles.insideListContainer}>
        <FlatList
          data={list}
          renderItem={({ item, index }) => renderItem(item, index)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default Item;
