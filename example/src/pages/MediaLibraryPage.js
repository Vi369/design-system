import React from "react";
import AddIcon from "@strapi/icons/AddIcon";
import SearchIcon from "@strapi/icons/SearchIcon";
import SettingsIcon from "@strapi/icons/SettingsIcon";
import { AppLayout } from "../layouts/AppLayout";
import {
  GridLayout,
  Cards,
  HeaderLayout,
  Button,
  Main,
} from "@strapi/design-system";
import { MediaLibraryCard } from "../MediaLibrary/MediaLibraryCard";

function MediaLibraryPage() {
  return (
    <AppLayout>
      <Main labelledBy="header">
        <Cards>
          <GridLayout
            header={
              <HeaderLayout
                id="header"
                primaryAction={
                  <Button startIcon={<AddIcon />}>Add an entry</Button>
                }
                title="Media Library"
                subtitle="36 assets"
              />
            }
            startActions={
              <>
                <Button variant="tertiary">
                  <SearchIcon aria-label="Search" />
                </Button>

                <Button variant="tertiary">Sort by</Button>
              </>
            }
            endActions={
              <>
                <Button variant="tertiary" startIcon={<SettingsIcon />}>
                  Settings
                </Button>
              </>
            }
          >
            <MediaLibraryCard />
            <MediaLibraryCard />
            <MediaLibraryCard />
            <MediaLibraryCard />
            <MediaLibraryCard />
            <MediaLibraryCard />
            <MediaLibraryCard />
            <MediaLibraryCard />
            <MediaLibraryCard />
            <MediaLibraryCard />
          </GridLayout>
        </Cards>
      </Main>
    </AppLayout>
  );
}

export default MediaLibraryPage;
