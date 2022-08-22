export type EventHandlersType = {
	onExportClick: () => Promise<void>;
	onImportClick: () => Promise<void>;
	onImportFileLoad: (event?: Event) => Promise<void>;
};
