import { FC } from 'react';

import styles from 'src/features/Editor/styles.module.css';
import { useEditor } from 'src/features/Editor/useEditor';

const Editor: FC = () => {
  const { editMode, userPreferences, handleClick, handleChange, handleBlur } = useEditor();

  return (
    <div className="relative w-full h-full p-4 rounded-lg border-[1px] border-[#464646] bg-[#191919c4]">
      <div>
        <div className="flex items-center gap-1">
          <div className={`${styles.circle} bg-[#ff605c]`} />
          <div className={`${styles.circle} bg-[#ffbd44]`} />
          <div className={`${styles.circle} bg-[#00ca4e]`} />
        </div>
        {editMode ? (
          <input
            className={`${styles.titleField} h-4 outline-none bg-transparent`}
            type="text"
            autoFocus
            width="auto"
            value={userPreferences.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ) : (
          <p className={styles.titleField} onClick={handleClick}>
            {userPreferences.title}
          </p>
        )}
      </div>
    </div>
  );
};

export default Editor;
