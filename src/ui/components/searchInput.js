import * as React from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux";

export default function SearchInput(props) {
  const history = useNavigate();

  const ALL_PRODUCTS_STATE = useSelector((state) => state.products);
  const ALL_COLLECTIONS_STATE = useSelector((state) => state.collections);

  const title = React.useCallback(() => {
    const products_titles = ALL_PRODUCTS_STATE.map((product) => {
      return {
        product_id: product.product_id,
        title: product.title,
        firstLetter: product.title[0],
      };
    });
    const collections_titles = ALL_COLLECTIONS_STATE.map((collection) => {
      return {
        collection_id: collection.collection_id,
        title: collection.title,
        firstLetter: collection.title[0],
      };
    });

    switch (props.searchType) {
      case "products":
        return products_titles;
      case "collections":
        return collections_titles;

      default:
        const all_titles = [];
        collections_titles.forEach((item) => {
          item.title = `${item.title} (Collection)`;

          all_titles.push(item);
        });

        products_titles.forEach((item) => {
          item.title = `${item.title} (Product)`;

          all_titles.push(item);
        });
        return all_titles;
    }
  }, [ALL_COLLECTIONS_STATE, ALL_PRODUCTS_STATE, props.searchType]);

  const options = React.useCallback(() => {
    const results = title().map((option) => {
      const firstLetter = option.title[0].toUpperCase();
      return {
        firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
        ...option,
      };
    });

    return results.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter));
  }, [title]);

  const label_text =
    props.searchType === "products"
      ? "Search pieces"
      : props.searchType === "collections"
      ? "Search collections"
      : "Search Catalogue";

  function handleSelect(e, value) {
    if (props.searchType === "products") {
      history(`/shop/pieces/view/${value.product_id}`);
    } else if (props.searchType === "collections") {
      history(`/shop/collections/view/${value.collection_id}`);
    } else {
      // eslint-disable-next-line eqeqeq
      if (value.product_id) {
        history(`/shop/pieces/view/${value.product_id}`);
      } else {
        history(`/shop/collections/view/${value.collection_id}`);
      }
    }

    if (props.searchType !== "products" && props.searchType !== "collections") {
      props.dismissModal();
    }
  }

  return (
    <Autocomplete
      id="grouped-demo"
      onChange={handleSelect}
      size="small"
      options={options()}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      isOptionEqualToValue={(option, value) =>
        option.product_id === value.product_id
      }
      sx={{
        width: { xs: "80%", lg: props.fullWidth ? "100%" : 300 },
        margin: { xs: "10px auto", lg: "10px" },
      }}
      renderInput={(params) => <TextField {...params} label={label_text} />}
    />
  );
}
