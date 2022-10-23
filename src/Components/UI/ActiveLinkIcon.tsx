import { FC } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { IMenuItem } from '../../Interfaces';

export const ActiveLinkIcon:FC<IMenuItem> = ({alias, anchor, icon, children}) => {//de tipo FC que extiende propiedades de la Interfaz IActiveLink mug-saucer
    const router = useRouter();
    return (
      <Link href={anchor}>
        <a className={router.asPath === anchor ? 'active' : ''}>
            {children}&nbsp;{alias}
        </a>
      </Link>
    )
}
