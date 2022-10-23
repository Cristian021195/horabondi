import { FC } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { IMenuItem } from '../../Interfaces';

export const ActiveLink:FC<IMenuItem> = ({alias, anchor, icon}) => {//de tipo FC que extiende propiedades de la Interfaz IActiveLink mug-saucer
    const router = useRouter();
    return (
      <Link href={anchor}>
        <a className={router.asPath === anchor ? 'active' : ''}> {alias}</a>
      </Link>
    )
}
