import styled from 'styled-components';
import {Collapse, Divider} from 'antd';

const { Panel } = Collapse;


export const NoDescriptionStyled = styled.p`
  color: gray;
`;

export const DividerStyled = styled(Divider)`
  margin: 0.5rem;
`;

export const SpinWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StarsCount = styled.span`
  padding-right: 0.25rem;
`;

export const StarsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ReposWrapper = styled.div`
  height: 13rem;
  overflow: auto;
`;

export const RepoWrapper = styled.div`
  background-color: e8e8e8;
  font-size: 0.75rem;
`;

export const HeaderStyled = styled.div`
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PanelStyled = styled(Panel)``;

export const CollapseStyled = styled(Collapse)`
  margin-top: 1rem;
  width: 100%;
`;
