const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-sans font-bold xs:text-[90px] text-[45px] text-white xs:leading-[86.8px] leading-[48.8px] w-full",
  heading3:
    "font-sans font-bold xs:text-[50px] text-[42px] text-white xs:leading-[76.8px] leading-[53.8px] w-full",
  heading4:
    "font-sans font-bold xs:text-[40px] text-[36px] text-white xs:leading-[76.8px] leading-[53.8px] w-full",
  paragraph:
    "font-sans font-semibold text-white xs:text-[32px] text-[28px] xs:leading-[40.8px] leading-[30.8px]",
  paragraph2:
    "font-sans font-semibold text-white xs:text-[24px] text-[16px] leading-[30.8px]",
  paragraph3:
    "font-sans font-semibold text-white xs:text-[24px] text-[14px] leading-[30.8px]",
  paragraph4:
    "font-sans font-semibold text-white xs:text-[24px] text-[10px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-start",
  flexEnd: "flex justify-end items-center",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  zoomImage: {
    transition: "transform 0.3s ease",
    transformOrigin: "top center",
  },

  iconContainer: {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
  },

  buttonContainer: {
    borderRadius: "50px 50px 50px 50px",
    width: "150px",
    padding: "10px 20px",
  },

  blogContainerLarge: {
    borderRadius: "30px 30px 30px 30px",
    width: "100%",
  },

  blogContainerSmall: {
    borderRadius: "10px 10px 10px 10px",
    width: "100%",
    height: "70px",
  },

  signUpContainer: {
    borderRadius: "50px 50px 50px 50px",
    width: "100px",
    padding: "10px 20px",
  },
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
