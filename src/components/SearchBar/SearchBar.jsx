import {
  languageOptions,
  levelOptions,
  priceOptions
} from '@/constants/filters';

import { SelectBase } from '@/components/common/SelectBase/SelectBase';
import * as SC from './SearchBar.styled';

export const SearchBar = ({ setLanguage, setLevel, setPrice }) => {
  return (
    <SC.SearchBarWrapper>
      <SC.SelectGroup>
        Languages
        <SelectBase
          name="language"
          placeholder="Select a language"
          options={languageOptions}
          menuHeight={160}
          controlWidth={221}
          onChange={setLanguage}
        />
      </SC.SelectGroup>
      <SC.SelectGroup>
        Level of knowledge
        <SelectBase
          name="level"
          placeholder="Select a level"
          options={levelOptions}
          controlWidth={192}
          menuHeight={132}
          onChange={setLevel}
        />
      </SC.SelectGroup>
      <SC.SelectGroup>
        Price
        <SelectBase
          name="price"
          placeholder="To $"
          options={priceOptions}
          controlWidth={124}
          menuHeight={132}
          onChange={setPrice}
        />
      </SC.SelectGroup>
    </SC.SearchBarWrapper>
  );
};
