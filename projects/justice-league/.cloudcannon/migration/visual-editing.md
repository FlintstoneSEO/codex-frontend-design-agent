# CloudCannon visual editing decision

Observed: 2026-08-06

Visual editing is deferred in this hosting-first pass. The homepage includes computed Wix Events data and third-party eLink/YouTube controls, while Wix remains the content source of truth. Adding CloudCannon editable regions now would imply content ownership that has not been approved.

CloudCannon reviewers can use the generated preview URL to inspect the complete static build. If specific page-level presentation fields are later approved for CloudCannon ownership, add bounded editable regions only for those fields and keep Wix records outside the editable surface.
