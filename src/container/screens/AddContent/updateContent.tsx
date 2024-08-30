import {Alert, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import * as THEME from '@/themes/variables';
import VectorIcons from '@/themes/vectorIcons';
import {responsiveSize, useCustomNavigation} from '@/utils/utils';
import {useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {InputComp} from '@/components/common/input/input';
import {CText} from '@/components/common/text/textComp';
import {WrapperComp} from '@/components/common/wrapper/wrapper';
import LoadingComp from '@/components/common/loading/loading';
import {deleteContent, updateContent} from '@/redux/users/userSlice';

export function UpdateContentScreen() {
  const dispatch = useDispatch();
  const route: any = useRoute();
  const {item} = route?.params?.data?.data;
  const navigate = useCustomNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setDescription(item.description);
    }
  }, [item]);

  const handleSubmit = () => {
    setLoading(true);
    const updatedData = {
      id: item?.id,
      title: title,
      description: description,
    };
    try {
      dispatch(updateContent(updatedData));
      setLoading(false);
      navigate.navigate('home');
    } catch (error) {
      setLoading(false);
      console.log('error', error);
      Alert.alert('Error', 'Failed to update content');
    }
  };

  const confirmDelete = () => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this content?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: deleteHandleSubmit,
        },
      ],
      {cancelable: false},
    );
  };

  const deleteHandleSubmit = () => {
    try {
      dispatch(deleteContent(item?.id));
      Alert.alert('Success', 'Content deleted successfully');
      navigate.navigate('home');
    } catch (error) {
      console.log('error', error);
      Alert.alert('Error', 'Failed to delete content');
    }
  };

  return (
    <WrapperComp>
      <View style={[THEME.Layout.rowJCenter]}>
        <TouchableOpacity
          onPress={() => navigate.navigate('home')}
          style={[THEME.Layout.rowACenter]}>
          <VectorIcons
            type={THEME.ICONS_TYPE.MaterialCommunityIcons}
            name="keyboard-backspace"
            size={30}
            color={THEME.COLORS.BLACK}
          />
          <CText type="sm"> Update Content</CText>
        </TouchableOpacity>
        <View style={[THEME.Layout.rowACenter]}>
          <TouchableOpacity
            onPress={confirmDelete}
            style={[THEME.MARGIN_H_SMALL]}>
            <VectorIcons
              name="delete"
              type={THEME.ICONS_TYPE.MaterialCommunityIcons}
              size={30}
              color={THEME.COLORS.RED}
            />
          </TouchableOpacity>
          {loading ? (
            <LoadingComp />
          ) : (
            <TouchableOpacity
              onPress={handleSubmit}
              style={[THEME.Layout.rowACenter]}>
              <VectorIcons name="save" size={30} color={THEME.COLORS.BLACK} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={{marginTop: 15}}>
        <InputComp
          value={title}
          onChangeText={setTitle}
          placeholder="Title"
          autoFocus
          style={{backgroundColor: 'transparent'}}
        />
        <View>
          <InputComp
            value={description}
            onChangeText={setDescription}
            style={{backgroundColor: 'transparent'}}
            multiLine
            placeholder="Note"
            props={{
              numberOfLines: responsiveSize(20),
              textAlignVertical: 'top',
            }}
          />
        </View>
      </View>
    </WrapperComp>
  );
}
