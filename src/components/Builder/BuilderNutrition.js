import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export const BuilderNutritionView = styled('div')`
  padding: ${(props) => props.theme.layout.padding};
  margin: 0 0 ${(props) => props.theme.layout.padding};
  background-color: ${(props) => props.theme.bgColors.tertiary};
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: ${(props) => props.theme.layout.paddingMobile};
    margin: 0;
  }
`

export const BuilderNutritionList = styled('ul')`
  padding: 1rem 2rem;
  line-height: ${(props) => props.theme.lineHeight};
  font-size: ${(props) => props.theme.fonts.sizes.small};
  border-radius: ${(props) => props.theme.border.radius};
  background-color: ${(props) => props.theme.bgColors.primary};
`

export const BuilderNutritionListItem = styled('li')`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 0.1rem;
  // border-bottom-width: ${(props) => props.theme.border.width};
  border-bottom-color: ${(props) => props.theme.border.color};

  &:last-of-type {
    border: 0;
  }

  span {
    display: block;
  }
`

const LineItem = ({ name, value, unit = '' }) => (
  <BuilderNutritionListItem>
    <span>{name}</span>
    <span>
      {value}
      {unit}
    </span>
  </BuilderNutritionListItem>
)

LineItem.displayName = 'LineItem'
LineItem.propTypes = {
  name: propTypes.string,
  value: propTypes.oneOfType([propTypes.string, propTypes.numbrer]),
  unit: propTypes.string,
}

const BuilderNutrition = ({ nutritionalInfo = {}, show = true }) => {
  const {
    calories,
    cholesterol,
    dietary_fiber,
    protein,
    saturated_fat,
    serving_size,
    sodium,
    sugars,
    total_carbs,
    total_fat,
    trans_fat,
  } = nutritionalInfo || {}
  return (
    <TransitionGroup component={null}>
      {show ? (
        <CSSTransition
          key="nutritionalInfo"
          classNames="reveal"
          timeout={{ enter: 250, exit: 250 }}
        >
          <BuilderNutritionView>
            <BuilderNutritionList>
              <LineItem name="Serving Size" value={serving_size} unit="oz" />
              <LineItem name="Calories" value={calories} />
              <LineItem name="Total Fat" value={total_fat} unit="g" />
              <LineItem name="Saturated Fat" value={saturated_fat} unit="g" />
              <LineItem name="Trans Fat" value={trans_fat} unit="g" />
              <LineItem name="Cholesterol" value={cholesterol} unit="mg" />
              <LineItem name="Sodium" value={sodium} unit="mg" />
              <LineItem name="Total Carbs" value={total_carbs} unit="g" />
              <LineItem name="Dietary Fiber" value={dietary_fiber} unit="g" />
              <LineItem name="Sugars" value={sugars} unit="g" />
              <LineItem name="Protein" value={protein} unit="g" />
            </BuilderNutritionList>
          </BuilderNutritionView>
        </CSSTransition>
      ) : null}
    </TransitionGroup>
  )
}

BuilderNutrition.displayName = 'BuilderNutrition'
BuilderNutrition.propTypes = {
  nutritionalInfo: propTypes.object,
  show: propTypes.bool,
}

export default BuilderNutrition
