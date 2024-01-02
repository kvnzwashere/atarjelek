// Create a custom hook (e.g., useBlogData)
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const useBlogData = (page) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:4000/v1/blog/post?page=${page}2&perPage=2`);
        const responseAPI = result.data;
        console.log('data API:', responseAPI.data);

        dispatch({ type: 'UPDATE_DATA_BLOG', payload: responseAPI.data });
        dispatch({
          type: 'UPDATE_PAGE',
          payload: {
            currentPage: responseAPI.currentPage,
            totalPage: Math.ceil(responseAPI.total_data / responseAPI.per_page)
          }
        });
      } catch (err) {
        console.log('error:', err);
      }
    };

    fetchData();
  }, [dispatch, page]);
};

export default useBlogData;
