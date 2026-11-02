const isAdult = localStorage.getItem('ss_adult_consent');

if (!isAdult) {
  const modalHTML = `
    <div id="age-disclaimer" style="
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.95); z-index: 99999;
      display: flex; justify-content: center; align-items: flex-start;
      font-family: 'IBM Plex Mono', monospace; padding: 40px 20px; box-sizing: border-box;
      overflow-y: auto;
    ">
      <div style="
        background: #0a0a0a; border: 2px solid #cc0000;
        padding: 30px; max-width: 600px; text-align: center;
        box-shadow: 0 0 50px rgba(204, 0, 0, 0.4);
        border-radius: 4px; position: relative; margin: auto;
      ">
        <h2 style="
          font-family: 'Unbounded', sans-serif; color: #cc0000; 
          font-size: 24px; margin-bottom: 20px; text-shadow: 0 0 15px rgba(204,0,0,0.6);
        ">ВНИМАНИЕ. МАТЕРИАЛЫ 18+</h2>
        
        <div style="color: #8a8578; font-size: 13px; text-align: left; line-height: 1.6; margin-bottom: 20px;">
          <p style="margin-bottom: 10px;">Этот сайт содержит элементы сатанинской эстетики, пентаграммы, упоминания ритуалов и техномагии. На сайте также содержится обсценная лексика (мат).</p>
        </div>

        <!-- ФОТО РАСПЯТОГО ХРИСТА -->
        <div style="margin-bottom: 20px;">
          <img src="img/IMG_20261102_174200_157.jpg" alt="Иисус Христос" style="width: 100%; max-width: 300px; border: 1px solid #333;">
        </div>
        
        <p style="color: #fff; font-size: 18px; font-weight: bold; margin-bottom: 20px;">
          Любим. Скорбим. Ждём.<a href="#ino-note-disclaimer" style="color: #cc0000; text-decoration: none;">*</a>
        </p>
        
        <!-- ПОСТЕР ФИЛЬМА -->
        <div style="margin-bottom: 20px;">
          <img src="img/IMG_20261102_174204_437.jpg" alt="Постер фильма" style="width: 100%; max-width: 300px; border: 1px solid #333;">
        </div>

        <!-- ПРИМЕЧАНИЕ ПРО "НЕ ОСКОРБЛЯЕМ" -->
        <div style="color: #8a8578; font-size: 13px; text-align: left; line-height: 1.6; margin-bottom: 20px;">
          <p style="margin-bottom: 10px;">Мы никого не оскорбляем. Если вы видите здесь пропаганду сатанизма, нетрадиционных ценностей или чего-то ещё, что задевает ваши чувства — это ваша интерпретация. Слова «сатанист», «ритуал» и «демон» здесь используются в культурологическом и художественном контексте, без цели кого-либо оскорбить или разжечь рознь.</p>
          <p>Если вы верующий человек, легкоранимый или просто не готовы к такому контенту — пожалуйста, не заходите. Мы предупреждаем сразу.</p>
        </div>

        <hr style="border-color: #1a1a1a; margin: 20px 0;">

        <!-- СНОСКА ПРО ФИЛЬМ -->
        <p id="ino-note-disclaimer" style="color: #8a8578; font-size: 11px; text-align: left; margin-bottom: 30px; line-height: 1.5;">
          * Мы с уважением относимся к Христу и с нетерпением ждём как Его второго пришествия (till kingdom come), так и выхода фильма Мела Гибсона «Страсти Христовы: Воскрешение» (The Resurrection of the Christ). Премьера первой части запланирована на 6 мая 2027 года, второй части — на 25 мая 2028 года. Ссылка на IMDb: <a href="https://www.imdb.com/title/tt5795232/" target="_blank" style="color: #8a2be2;">https://www.imdb.com/title/tt5795232/</a>
        </p>

        <!-- КНОПКИ -->
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <button id="btn-adult" style="
            background: #cc0000 !important; color: #fff !important; border: none; padding: 15px;
            font-family: 'IBM Plex Mono', monospace; font-weight: bold; font-size: 14px;
            cursor: pointer; text-transform: uppercase; letter-spacing: 0.1em;
            transition: all 0.2s; box-shadow: 0 0 20px rgba(204, 0, 0, 0.4);
          ">Мне есть 18 / Толерантен / Готов(а, о)</button>
          
          <button id="btn-leave" style="
            background: #1e90ff !important; color: #fff !important; border: none; padding: 15px;
            font-family: 'IBM Plex Mono', monospace; font-weight: bold; font-size: 14px;
            cursor: pointer; text-transform: uppercase; letter-spacing: 0.1em;
            transition: all 0.2s; box-shadow: 0 0 20px rgba(30, 144, 255, 0.4);
          ">Нет 18 / Не толерантен / Ухожу</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);

  document.getElementById('btn-leave').addEventListener('click', () => {
    window.location.href = 'https://www.google.com';
  });

  document.getElementById('btn-adult').addEventListener('click', () => {
    localStorage.setItem('ss_adult_consent', 'true');
    document.getElementById('age-disclaimer').remove();
  });
}
