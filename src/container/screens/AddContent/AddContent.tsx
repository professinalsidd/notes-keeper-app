import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import * as THEME from '@/themes/variables';
import VectorIcons from '@/themes/vectorIcons';
import {responsiveSize, useCustomNavigation} from '@/utils/utils';
import {useDispatch} from 'react-redux';
import {InputComp} from '@/components/common/input/input';
import {WrapperComp} from '@/components/common/wrapper/wrapper';
import LoadingComp from '@/components/common/loading/loading';
import {setAddContent} from '@/redux/users/userSlice';

export function AddContentScreen() {
  const dispatch = useDispatch();
  const navigate = useCustomNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    const userData = {
      id: Math.random().toLocaleString(),
      title,
      description,
    };
    try {
      dispatch(setAddContent(userData));
      setLoading(false);
      navigate.navigate('home');
    } catch (error) {
      setLoading(false);
      console.log('error', error);
    }
  };

  return (
    <WrapperComp>
      <View>
        <View style={[THEME.Layout.rowJCenter]}>
          <TouchableOpacity onPress={() => navigate.navigate('home')}>
            <VectorIcons
              type={THEME.ICONS_TYPE.MaterialCommunityIcons}
              name="keyboard-backspace"
              size={30}
              color={THEME.COLORS.BLACK}
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
        <View style={{marginTop: 15}}>
          <InputComp
            value={title}
            onChangeText={setTitle}
            placeholder="Title"
            autoFocus={true}
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
      </View>
    </WrapperComp>
  );
}
