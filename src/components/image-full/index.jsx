import styled from 'styled-components';

const StyledImageFull = styled.div`
  max-width: '100vw';
  padding: '10px 3em';
  @media (max-width: 768px) {
    padding: '0';
  }
`;

const StyledImg = styled.img`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 20px 8px 0px;
  border-radius: 15px;
  @media (max-width: 768px) {
    border-radius: 0;
  }
`;

export const ImageFull = ({ img, altImg }) => {
  return (
    <StyledImageFull>
      <StyledImg width="100%" src={img} alt={altImg} />
    </StyledImageFull>
  );
};
