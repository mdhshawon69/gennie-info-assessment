import images from "../../assets";
import Image from "next/image";

export const DeleteIcon = ({ className }) => {
  return <Image src={images.deleteIcon} alt='delete_icon' />;
};

export const EditIcon = ({ className }) => {
  return <Image src={images.editIcon} alt='delete_icon' />;
};

export const NecessaryIcon = ({ className }) => {
  return <Image src={images.necessaryIcon} alt='delete_icon' />;
};

export const Cross = ({ className }) => {
  return <Image src={images.cross} alt='delete_icon' />;
};
