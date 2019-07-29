/**
 * LUIS Runtime Client
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CompositeEntityModel } from './compositeEntityModel';
import { EntityModel } from './entityModel';
import { IntentModel } from './intentModel';
import { Sentiment } from './sentiment';

/**
* Prediction, based on the input query, containing intent(s) and entities.
*/
export class LuisResult {
    /**
    * The input utterance that was analyzed.
    */
    'query'?: string;
    /**
    * The corrected utterance (when spell checking was enabled).
    */
    'alteredQuery'?: string;
    'topScoringIntent'?: IntentModel;
    /**
    * All the intents (and their score) that were detected from utterance.
    */
    'intents'?: Array<IntentModel>;
    /**
    * The entities extracted from the utterance.
    */
    'entities'?: Array<EntityModel>;
    /**
    * The composite entities extracted from the utterance.
    */
    'compositeEntities'?: Array<CompositeEntityModel>;
    'sentimentAnalysis'?: Sentiment;
    'connectedServiceResult'?: LuisResult;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "query",
            "baseName": "query",
            "type": "string"
        },
        {
            "name": "alteredQuery",
            "baseName": "alteredQuery",
            "type": "string"
        },
        {
            "name": "topScoringIntent",
            "baseName": "topScoringIntent",
            "type": "IntentModel"
        },
        {
            "name": "intents",
            "baseName": "intents",
            "type": "Array<IntentModel>"
        },
        {
            "name": "entities",
            "baseName": "entities",
            "type": "Array<EntityModel>"
        },
        {
            "name": "compositeEntities",
            "baseName": "compositeEntities",
            "type": "Array<CompositeEntityModel>"
        },
        {
            "name": "sentimentAnalysis",
            "baseName": "sentimentAnalysis",
            "type": "Sentiment"
        },
        {
            "name": "connectedServiceResult",
            "baseName": "connectedServiceResult",
            "type": "LuisResult"
        }    ];

    static getAttributeTypeMap() {
        return LuisResult.attributeTypeMap;
    }
}

