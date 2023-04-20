import { FC } from 'react';
import style from './Article.module.scss';
import { IArticle } from '../article.interface';

const Article:FC<IArticle> = ({img,link,name,time})=>{
    return(
       <div className='border-[1px] flex justify-between'>
        <h1>{name}</h1>
        <span>{time}</span>
       </div>
    )
}
export default Article;