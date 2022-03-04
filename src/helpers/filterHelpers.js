export function FilterAction(
  data,
  dataState,
  selection,
  updateSelection,
  updateDataState
) {
  if (data.isChecked === false) {
    const updatedSelection = selection;
    updatedSelection.push(data);
    updateSelection(updatedSelection);

    data.isChecked = true;
    dataState[data.indexNumber] = data;

    updateDataState(dataState);
  } else {
    const selectedArtTypeIndex = selection.indexOf(data);
    const updatedSelection = selection.splice(selectedArtTypeIndex, 1);

    updateSelection(updatedSelection);

    data.isChecked = false;
    dataState[data.indexNumber] = data;

    updateDataState(dataState);
  }
}

export function FilterClear(
  filterState,
  filterStateUpdater,
  filterToggleUpdater,
  selectedFiltersStateUpdater
) {
  const resetCollectionState = filterState.map((col) => {
    if (col.isChecked) {
      col.isChecked = false;
    }
    return col;
  });

  filterStateUpdater(resetCollectionState);
  filterToggleUpdater(false);
  selectedFiltersStateUpdater([]);
}

export function FilterApply([
  selectedCollections,
  selectedArtTypes,
  selectedCanvasSize,
  newPriceRange,
  priceUpdated,
]) {
  if (!selectedCollections && !selectedArtTypes && !selectedCanvasSize) {
    alert("Filters are empty");
  } else {
    alert("please wait as will fetch the results");
  }
}
