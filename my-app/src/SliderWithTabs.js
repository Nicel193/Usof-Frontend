import React, { useState } from 'react';

const SliderWithTabs = () => {
  const [activeTab, setActiveTab] = useState('posts'); // Установка начальной вкладки по умолчанию

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="slider-with-tabs">
      <div className="tabs">
        <div className={`tab ${activeTab === 'posts' ? 'active' : ''}`} onClick={() => handleTabClick('posts')}>
          Посты
        </div>
        <div className={`tab ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => handleTabClick('profile')}>
          Профиль
        </div>
        {/* Добавьте другие вкладки, если нужно */}
      </div>

      <div className="tab-content">
        {activeTab === 'posts' && (
          <div>
            <h2>Содержимое Постов</h2>
            {/* Здесь может быть ваш список постов */}
          </div>
        )}
        {activeTab === 'profile' && (
          <div>
            <h2>Профиль пользователя</h2>
            {/* Здесь может быть информация о профиле пользователя */}
          </div>
        )}
        {/* Добавьте другие блоки для других вкладок */}
      </div>
    </div>
  );
};

export default SliderWithTabs;
