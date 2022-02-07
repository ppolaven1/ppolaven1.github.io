import {Container, Tab, Tabs, TabList} from '@chakra-ui/react';
import { VISIBILITY_FILTER } from '../constants';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';

export const VisibilityFilter = () => {
  const dispatch = useDispatch();
  return (
    <Container centerContent>
        <Tabs>
            <TabList>
                {Object.keys(VISIBILITY_FILTER).map(filterKey =>{
                    const currentFilter = VISIBILITY_FILTER[filterKey];
                    return(
                        <Tab onClick={() => dispatch(setFilter(currentFilter))}key={`visibility-filter-${currentFilter}`}>
                            {currentFilter}
                        </Tab>
                    )
                }) }
            </TabList>
        </Tabs>
    </Container>
  )
};
