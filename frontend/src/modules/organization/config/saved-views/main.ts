import { SavedView, SavedViewsConfig } from '@/shared/modules/saved-views/types/SavedViewsConfig';
import allOrganizations from './views/all-organizations';
import newAndActive from './views/new-and-active';
import mostMembers from './views/most-members';
import teamOrganizations from './views/team-organizations';

import teamOrganization from './settings/teamOrganization/config';

export const organizationSavedViews: SavedViewsConfig = {
  defaultView: allOrganizations,
  settings: {
    teamOrganization,
  },
  sorting: {
    displayName: 'Organization',
    memberCount: '# contacts',
    activityCount: '# activities',
    joinedAt: 'Joined date',
    founded: 'Founded',
  },
};

// Hardcoded views until we have backend done for it
export const organizationViews: SavedView[] = [
  newAndActive,
  mostMembers,
  teamOrganizations,
];
