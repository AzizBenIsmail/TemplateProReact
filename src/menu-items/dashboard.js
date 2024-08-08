// third-party
import { FormattedMessage } from 'react-intl';

// project-imports
import { useSelector } from 'store';

// assets
import { Home3, HomeTrendUp, Box1 } from 'iconsax-react';

const icons = {
  navigation: Home3,
  dashboard: HomeTrendUp,
  components: Box1
};

// ==============================|| MENU ITEMS - API ||============================== //

export const Menu = () => {
  const { menu } = useSelector((state) => state.menu);

  const SubChildrenLis = (SubChildrenLis) => {
    return SubChildrenLis?.map((subList) => {
      return {
        ...subList,
        title: <FormattedMessage id={`${subList.title}`} />,
        // @ts-ignore
        icon: icons[subList.icon]
      };
    });
  };

  const itemList = (subList) => {
    let list = {
      ...subList,
      title: <FormattedMessage id={`${subList.title}`} />,
      // @ts-ignore
      icon: icons[subList.icon]
    };

    if (subList.type === 'collapse') {
      list.children = SubChildrenLis(subList.children);
    }
    return list;
  };

  const withoutMenu = menu?.children?.filter((item) => item.id !== 'no-menu');
  const ChildrenList = withoutMenu?.map((subList) => {
    return itemList(subList);
  });

  const menuList = {
    ...menu,
    title: <FormattedMessage id={`${menu.title}`} />,
    icon: icons[menu.icon],
    children: ChildrenList
  };

  return menuList;
};
