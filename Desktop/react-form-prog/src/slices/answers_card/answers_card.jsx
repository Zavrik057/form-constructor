
import { Skeleton, Stack } from '@mui/material';
import './answers_card.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FormState } from '../../pages/current_repositorie_page.jsx/currentRepositoriePage';

function AnswerCard({ data, index }) {
   const { id } = useContext(FormState);
   return (
      <>
         <Link to={'/repositorie/' + id + '/answer/' + index} className="answer-card">
            <div className="answer-card__content">
               <div className="answer-card__main">
                  <div className="answer-card__header-line"></div>
                  <div className="answer-card__fake-form">
                     <Stack spacing={1}>
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="rectangular" width={210} height={60} />
                        <Skeleton variant="rounded" width={210} height={60} />
                     </Stack>
                  </div>
               </div>
               <div className="answer-card__timeline">
                  <div className="answer-card__date">date: {data.date}</div>
                  <div className="answer-card__time">time: {data.time}</div>
               </div>
            </div>
         </Link>
      </>
   );
}

export default AnswerCard;