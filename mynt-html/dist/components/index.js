export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';
import { i as initialize } from './ionic-global.js';

const globalScripts = initialize;

globalScripts();
