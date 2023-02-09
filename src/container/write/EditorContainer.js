import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Editor from '../../components/Write/Editor';
import { changeField, initialize } from '../../modules/Write';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );
//  다른 페이지를 갔다가 다시 이 페이지로 왔을 때는 내용 초기화. 
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <Editor onChangeField={onChangeField} title={title} body={body}></Editor>
  );
};

export default EditorContainer;