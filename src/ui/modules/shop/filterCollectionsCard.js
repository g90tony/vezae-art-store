import React from "react";

import {
  bodyTypographyStyles as body,
  headingTypographyStyles as heading,
} from "../../../assets/styles/typography";

import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";

import { palette, message } from "../../../assets/styles/colors";

import {
  dummyArtTypesData as dummyArtTypes,
  dummyCanvasSizesData as dummyCanvasSizes,
} from "../../../helpers/data/dummyData";

import {
  Button,
  Checkbox,
  Collapse,
  FormControlLabel,
  FormGroup,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import PriceSlider from "../../components/priceSlider";
import { Box } from "@mui/system";
import {
  FilterAction,
  FilterApply,
  FilterClear,
} from "../../../helpers/filterHelpers";

export default function FilterCollectionsCard() {
  const [mobileFilter, setMobileFilter] = React.useState(false);

  // filters data
  const [canvasSizes, setCanvasSizes] = React.useState([]);
  const [artTypes, setArtTypes] = React.useState([]);
  const [priceRange, setPriceRange] = React.useState([0, 10000]);

  // toggle states
  const [priceToggle, setPriceToggle] = React.useState(false);
  const [canvasSizeToggle, setCanvasSizeToggle] = React.useState(false);
  const [artTypeToggle, setArtTypeToggle] = React.useState(false);
  const [hasChanged, setHasChanged] = React.useState();
  // selected filter items in
  const [selectedCanvasSizes, setSelectedCanvasSizes] = React.useState([]);
  const [selectedArtTypes, setSelectedArtTypes] = React.useState([]);

  function loadState(data, updateState) {
    let count = 0;

    const newState = data.map((item) => {
      item.isChecked = false;
      item.indexNumber = count;

      count++;

      return item;
    });

    updateState(newState);
  }

  React.useEffect(() => {
    [
      { data: dummyArtTypes, updateState: setArtTypes },
      { data: dummyCanvasSizes, updateState: setCanvasSizes },
    ].forEach((filter) => {
      loadState(filter.data, filter.updateState);
    });

    return () => {
      [{ updateState: setArtTypes }, { updateState: setCanvasSizes }].forEach(
        (filter) => {
          filter.updateState([]);
        }
      );

      return 0;
    };
  }, []);

  function handleApply() {
    console.log(hasChanged);
    FilterApply(selectedArtTypes, selectedCanvasSizes, priceRange, hasChanged);
  }

  function handleClear() {
    [
      {
        filterState: artTypes,
        filterToggleUpdater: setArtTypeToggle,
        filterStateUpdater: setArtTypes,
        selectedFiltersStateUpdater: setSelectedArtTypes,
      },
      {
        filterState: canvasSizes,
        filterToggleUpdater: setCanvasSizeToggle,
        filterStateUpdater: setCanvasSizes,
        selectedFiltersStateUpdater: setSelectedCanvasSizes,
      },
    ].forEach((filter) => {
      FilterClear(
        filter.filterState,
        filter.filterStateUpdater,
        filter.filterToggleUpdater,
        filter.selectedFiltersStateUpdater
      );
    });

    setPriceRange([0, 10000]);
    setHasChanged(false);
    setPriceToggle(false);
  }

  function updatePrice(event, newValue, activeThumb) {
    if (hasChanged === false) {
      setHasChanged(true);
    }

    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPriceRange(newValue);
    } else {
      setPriceRange(newValue);
    }

    console.log(hasChanged);
  }

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <List
        sx={{
          padding: "10px",
          width: "85vw",
          margin: "auto",
          backgroundColor: palette.secondary,
          display: { xs: "flex", lg: "none" },
          flexDirection: "column",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              margin: "10px auto",
              width: "100%",
            }}
          >
            <ListSubheader
              component="div"
              sx={{
                fontSize: heading.h4,
                color: palette.primary,
                width: "100%",
                textAlign: "center",
              }}
              id="nested-list-subheader"
            >
              Filter Results
            </ListSubheader>
            <Button
              onClick={() => setMobileFilter(!mobileFilter)}
              sx={{
                fontSize: body.smallBold,
                width: "80%",
                margin: "10px auto",
                padding: "5px 7px",
                backgroundColor: palette.primary,
                color: palette.secondary,
                "&:hover": {
                  backgroundColor: palette.accentLight,
                  color: palette.primary,
                },
              }}
            >
              {!mobileFilter ? "Open Filters" : "Close Filters"}
            </Button>
            <Button
              sx={{
                fontSize: body.smallBold,
                width: "80%",
                margin: "0 auto",
                padding: "5px 7px",
                backgroundColor: palette.accentDark,
                color: palette.secondary,
                "&:hover": {
                  backgroundColor: message.warning,
                  color: palette.secondary,
                },
              }}
              onClick={handleClear}
            >
              Clear Filters
            </Button>
          </Box>
        }
      >
        <Collapse
          in={mobileFilter}
          component="div"
          sx={{
            padding: "10px",
            backgroundColor: palette.accentLight,
            margin: "0 10px 10px 10px",
          }}
          timeout="auto"
          unmountOnExit
        >
          <ListItemButton
            sx={{
              backgroundColor: palette.accentLight,
              margin: "10px 10px 0 10px",
            }}
            onClick={() => setArtTypeToggle(!artTypeToggle)}
          >
            <ListItemText
              sx={{}}
              primary={
                <Typography
                  sx={{
                    padding: "5px 20px",
                    fontSize: body.defaultBold,
                    fontWeight: 800,
                  }}
                >
                  Art Type
                </Typography>
              }
            />
            <Typography
              sx={{
                padding: "10px",
                fontSize: body.extraLargeBold,
                fontWeight: 800,
              }}
            >
              {artTypeToggle ? <ExpandLess /> : <ExpandMore />}
            </Typography>
          </ListItemButton>
          <Collapse
            in={artTypeToggle}
            sx={{
              padding: "0px",
              backgroundColor: palette.accentLight,
              margin: "0 0px 10px 0px",
            }}
            timeout="auto"
            unmountOnExit
          >
            <List
              component="div"
              sx={{
                backgroundColor: palette.secondary,
                // padding: "10px",
              }}
            >
              {artTypes.map((type) => {
                return (
                  <FormGroup key={type.id}>
                    <FormControlLabel
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        margin: "10px auto",
                        padding: "0px 5px",
                        width: { xs: "80%", lg: "60%" },
                        "& .MuiFormControlLabel-label": {
                          fontSize: body.defaultBold,
                          fontWeight: 800,
                          textAlign: "start",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                        },
                      }}
                      control={
                        <Checkbox
                          defaultChecked={type.isChecked ? true : false}
                          value={type.isChecked}
                          onChange={() => {
                            FilterAction(
                              type,
                              artTypes,
                              selectedArtTypes,
                              setSelectedArtTypes,
                              setArtTypes
                            );
                          }}
                        />
                      }
                      label={type.text}
                    />
                  </FormGroup>
                );
              })}
            </List>
          </Collapse>

          <ListItemButton
            sx={{
              backgroundColor: palette.accentLight,
              margin: "10px 10px 0 10px",
            }}
            onClick={() => setCanvasSizeToggle(!canvasSizeToggle)}
          >
            <ListItemText
              sx={{}}
              primary={
                <Typography
                  sx={{
                    padding: "5px 20px",
                    fontSize: body.defaultBold,
                    fontWeight: 800,
                  }}
                >
                  Canvas Sizes
                </Typography>
              }
            />
            <Typography
              sx={{
                padding: "10px",
                fontSize: body.extraLargeBold,
                fontWeight: 800,
              }}
            >
              {canvasSizeToggle ? <ExpandLess /> : <ExpandMore />}
            </Typography>
          </ListItemButton>
          <Collapse
            in={canvasSizeToggle}
            sx={{
              padding: "0px",
              backgroundColor: palette.accentLight,
              margin: "0 0px 10px 0px",
            }}
            timeout="auto"
            unmountOnExit
          >
            <List
              component="div"
              sx={{
                backgroundColor: palette.secondary,
                // padding: "10px",
              }}
            >
              {canvasSizes.map((size) => {
                return (
                  <FormGroup key={size.id}>
                    <FormControlLabel
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        margin: "10px auto",
                        padding: "0px 5px",
                        width: { xs: "80%", lg: "60%" },
                        "& .MuiFormControlLabel-label": {
                          fontSize: body.defaultBold,
                          fontWeight: 800,
                          textAlign: "start",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                        },
                      }}
                      control={
                        <Checkbox
                          defaultChecked={size.isChecked ? true : false}
                          value={size.isChecked}
                          onChange={() => {
                            FilterAction(
                              size,
                              canvasSizes,
                              selectedCanvasSizes,
                              setSelectedCanvasSizes,
                              setCanvasSizes
                            );
                          }}
                        />
                      }
                      label={size.text}
                    />
                  </FormGroup>
                );
              })}
            </List>
          </Collapse>

          <ListItemButton
            sx={{
              backgroundColor: palette.accentLight,
              margin: "10px 10px 0 10px",
            }}
            onClick={() => setPriceToggle(!priceToggle)}
          >
            <ListItemText
              sx={{}}
              primary={
                <Typography
                  sx={{
                    padding: "5px 20px",
                    fontSize: body.defaultBold,
                    fontWeight: 800,
                  }}
                >
                  Price
                </Typography>
              }
            />
            <Typography
              sx={{
                padding: "10px",
                fontSize: body.extraLargeBold,
                fontWeight: 800,
              }}
            >
              {priceToggle ? <ExpandLess /> : <ExpandMore />}
            </Typography>
          </ListItemButton>
          <Collapse
            sx={{
              backgroundColor: palette.accentLight,
              height: "fit-content",
              padding: "0px",
              margin: "0 0px 10px 0px",
            }}
            in={priceToggle}
            timeout="auto"
            unmountOnExit
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                padding: "20px",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <PriceSlider
                hasChanged={setHasChanged}
                value={priceRange}
                updatePrice={updatePrice}
              />
            </Box>
          </Collapse>
          <Button
            size="small"
            onClick={handleApply}
            sx={{
              padding: "5px 20px",
              width: "100%",
              margin: "0 auto",
              fontWeight: 800,
              "&:hover": {
                backgroundColor: palette.secondary,
                color: palette.primary,
              },
              backgroundColor: palette.primary,
              color: palette.secondary,
            }}
          >
            Apply Filter
          </Button>
        </Collapse>
      </List>
      <List
        sx={{
          display: { xs: "none", lg: "flex" },
          flexDirection: "column",
          marginTop: "10px",
          padding: "10px",
          width: "350px",
          backgroundColor: palette.secondary,
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            sx={{ fontSize: heading.h4, color: palette.primary }}
            id="nested-list-subheader"
            onClick={() => setMobileFilter(!mobileFilter)}
          >
            Filter Results
          </ListSubheader>
        }
      >
        <ListItemButton
          sx={{
            backgroundColor: palette.accentLight,
            margin: "10px 10px 0 10px",
          }}
          onClick={() => setArtTypeToggle(!artTypeToggle)}
        >
          <ListItemText
            sx={{}}
            primary={
              <Typography
                sx={{
                  padding: "10px",
                  fontSize: body.extraLargeBold,
                  fontWeight: 800,
                }}
              >
                Art Type
              </Typography>
            }
          />
          <Typography
            sx={{
              padding: "10px",
              fontSize: body.extraLargeBold,
              fontWeight: 800,
            }}
          >
            {artTypeToggle ? <ExpandLess /> : <ExpandMore />}
          </Typography>
        </ListItemButton>
        <Collapse
          in={artTypeToggle}
          sx={{
            padding: "10px 30px",
            backgroundColor: palette.accentLight,
            margin: "0 10px 10px 10px",
          }}
          timeout="auto"
          unmountOnExit
        >
          <List
            component="div"
            sx={{
              backgroundColor: palette.secondary,
              padding: "10px",
            }}
          >
            {artTypes.map((type) => {
              return (
                <FormGroup key={type.id}>
                  <FormControlLabel
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      margin: "10px auto",
                      padding: "0px 20px",
                      width: "60%",
                      "& .MuiFormControlLabel-label": {
                        fontSize: body.defaultBold,
                        fontWeight: 800,
                        textAlign: "start",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        width: "75%,",
                      },
                    }}
                    control={
                      <Checkbox
                        defaultChecked={type.isChecked ? true : false}
                        value={type.isChecked}
                        onChange={() => {
                          FilterAction(
                            type,
                            artTypes,
                            selectedArtTypes,
                            setSelectedArtTypes,
                            setArtTypes
                          );
                        }}
                      />
                    }
                    label={type.text}
                  />
                </FormGroup>
              );
            })}
          </List>
        </Collapse>

        <ListItemButton
          sx={{
            backgroundColor: palette.accentLight,
            margin: "10px 10px 0 10px",
          }}
          onClick={() => setCanvasSizeToggle(!canvasSizeToggle)}
        >
          <ListItemText
            sx={{}}
            primary={
              <Typography
                sx={{
                  padding: "10px",
                  fontSize: body.extraLargeBold,
                  fontWeight: 800,
                }}
              >
                Canvas Sizes
              </Typography>
            }
          />
          <Typography
            sx={{
              padding: "10px",
              fontSize: body.extraLargeBold,
              fontWeight: 800,
            }}
          >
            {canvasSizeToggle ? <ExpandLess /> : <ExpandMore />}
          </Typography>
        </ListItemButton>
        <Collapse
          in={canvasSizeToggle}
          sx={{
            padding: "10px 30px",
            backgroundColor: palette.accentLight,
            margin: "0 10px 10px 10px",
          }}
          timeout="auto"
          unmountOnExit
        >
          <List
            component="div"
            sx={{
              backgroundColor: palette.secondary,
              padding: "10px",
            }}
          >
            {canvasSizes.map((size) => {
              return (
                <FormGroup key={size.id}>
                  <FormControlLabel
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      margin: "10px auto",
                      padding: "0px 20px",
                      width: "60%",
                      "& .MuiFormControlLabel-label": {
                        fontSize: body.defaultBold,
                        fontWeight: 800,
                        textAlign: "start",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        width: "75%,",
                      },
                    }}
                    control={
                      <Checkbox
                        defaultChecked={size.isChecked ? true : false}
                        value={size.isChecked}
                        onChange={() => {
                          FilterAction(
                            size,
                            canvasSizes,
                            selectedCanvasSizes,
                            setSelectedCanvasSizes,
                            setCanvasSizes
                          );
                        }}
                      />
                    }
                    label={size.text}
                  />
                </FormGroup>
              );
            })}
          </List>
        </Collapse>

        <ListItemButton
          sx={{
            backgroundColor: palette.accentLight,
            margin: "10px 10px 0 10px",
          }}
          onClick={() => setPriceToggle(!priceToggle)}
        >
          <ListItemText
            sx={{}}
            primary={
              <Typography
                sx={{
                  padding: "10px",
                  fontSize: body.extraLargeBold,
                  fontWeight: 800,
                }}
              >
                Price
              </Typography>
            }
          />
          <Typography
            sx={{
              padding: "10px",
              fontSize: body.extraLargeBold,
              fontWeight: 800,
            }}
          >
            {priceToggle ? <ExpandLess /> : <ExpandMore />}
          </Typography>
        </ListItemButton>
        <Collapse
          sx={{
            backgroundColor: palette.accentLight,
            height: "100%",
            padding: "10px",
            margin: "0 10px 10px 10px",
          }}
          in={priceToggle}
          timeout="auto"
          unmountOnExit
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PriceSlider
              priceUpdated={updatePrice}
              value={priceRange}
              updatePrice={updatePrice}
            />
          </Box>
        </Collapse>
        <Button
          onClick={handleApply}
          sx={{
            padding: "20px",
            width: "100%",
            margin: "0 auto",
            fontWeight: 800,
            "&:hover": {
              backgroundColor: palette.secondary,
              color: palette.primary,
            },
            backgroundColor: palette.primary,
            color: palette.secondary,
          }}
        >
          Apply Filter
        </Button>
        <Button
          onClick={handleClear}
          sx={{
            padding: "20px",
            width: "100%",
            margin: "5px auto",
            fontWeight: 800,
            "&:hover": {
              backgroundColor: palette.secondary,
              color: message.warning,
            },
            backgroundColor: message.warning,
            color: palette.secondary,
          }}
        >
          Clear Filters
        </Button>
      </List>
    </Grid>
  );
}
