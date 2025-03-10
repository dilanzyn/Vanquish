interface ContactItem {
    icon?: string | React.ReactNode;
    description?: string;
  }

const Contact: React.FC<ContactItem> = ({icon,description}) => {
    return(
        <div className="py-2">
        <div className="border-2 flex w-[300px]">
        <div className="px-2 py-1 border-r-2 ">
             {typeof icon === 'string' ? (
        <img src={icon} alt="icon" className="w-6 h-6 bg-transparent " />
      ) : (
        icon && <span className="mr-2">{icon}</span>
      )}
        </div>
            <div className="-divide-x-2 flex mx-auto">
                <p className="flex items-center">{description}</p>
            </div>
        </div>
        </div>
    );
};

export default Contact;