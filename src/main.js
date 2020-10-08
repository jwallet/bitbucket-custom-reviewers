// @flow

/* eslint-disable import/first */
/* eslint-disable no-multi-assign */

import customReviewersFeature from './custom-reviewers/custom-reviewers'

import { isCreatePullRequestURL, isEditPullRequestURL } from './page-detect'

function init() {
    if (isCreatePullRequestURL()) {
        customReviewersFeature()
    } else if (isEditPullRequestURL()) {
        customReviewersFeature()
    }
}

init()
