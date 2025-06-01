import './styles.css';
import spongeBobImage from './images/image.webp';

const title = document.createElement('h1');
title.textContent = 'Привет, Спанч Боб - Квадратные Штаны!';
document.body.appendChild(title);

const img = document.createElement('img');
img.src = spongeBobImage;
img.alt = 'Спанч Боб';
document.body.appendChild(img);
