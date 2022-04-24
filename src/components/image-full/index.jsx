export const ImageFull = ({ img, altImg }) => {
  return (
    <div style={{ maxWidth: '100vw', padding: '10px 3em' }}>
      <img
        style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 20px 8px 0px', borderRadius: '15px' }}
        width="100%"
        src={img}
        alt={altImg}
      />
    </div>
  );
};
