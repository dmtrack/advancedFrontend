import webpack from 'webpack';
import path from 'path';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';

export const buildWebpackConfig = (
    options: BuildOptions
): webpack.Configuration => {
    const { mode, paths } = options;
    return {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },

        plugins: buildPlugins(options),
    };
};
