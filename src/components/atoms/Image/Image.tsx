import NextImage from 'next/image';
import * as S from './Image.styles';

const Image = () => {
  return (
    <S.ImageArea>
      <NextImage 
        alt='dfndr enteprise'
        src='https://cyberlabs.ai/wp-content/uploads/2021/09/CYBERLABS_academy-1024x493.png'
        fill
      />
    </S.ImageArea>
  )
};

export default Image;